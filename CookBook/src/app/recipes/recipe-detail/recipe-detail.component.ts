import { Component, OnInit , Input ,Output, EventEmitter,OnDestroy} from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,OnDestroy {
  //  @Input() selectedRecipe;
 private selectedRecipe;
  private recipeID="";
  paramsSubscription: Subscription;
  constructor(private cartService:CartService,private route: ActivatedRoute,private recipeService:RecipeService) { 
 // console.log(this.selectedRecipe);
  }

  ngOnInit() {
   // this.recipeID= this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params
  .subscribe(
    (params: Params) => {
      this.recipeID = params['id'];
      
      if(!!this.recipeID){
       this.selectedRecipe= this.recipeService.getRecipe(this.recipeID);
       console.log(this.selectedRecipe);
      }
      if(!this.selectedRecipe){
        this.selectedRecipe=this.recipeService.getRecipes()[0];
      }
      
    }
  );
  console.log("RecipeListComponent init");
  }

  addToCart(){
    if(!!this.selectedRecipe){
      this.cartService.addToCart(this.selectedRecipe);
    }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
