import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
@Input() selectedRecipe;
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.selectedRecipe.recipe_id);
  }
}
