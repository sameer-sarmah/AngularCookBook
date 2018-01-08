import { Component, OnInit , Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:any[]=[];
//  @Input() recipes;
 // @Output() selectedRecipe=new EventEmitter() 
  constructor(private router: Router,private recipeService:RecipeService) {  
    this.recipes=recipeService.getRecipes();
  }

  ngOnInit() {
   console.log("RecipeListComponent init");
  }

  listItemClicked(recipe) {
  //this.selectedRecipe.emit(recipe);
  this.router.navigate(['recipes',recipe.recipe_id])
 }
}
