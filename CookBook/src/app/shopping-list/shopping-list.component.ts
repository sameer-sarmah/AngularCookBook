import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,AfterViewInit {
  private recipes;
  constructor(private cartService:CartService) { 
    this.recipes=this.cartService.getRecipesInCart();
    console.log(this.recipes);
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    // viewChild is set after the view has been initialized

  }
}
