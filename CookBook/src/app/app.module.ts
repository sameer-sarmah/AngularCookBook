import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { CartService } from './services/cart-service.service';
import { AppRoutingModule } from './app.routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeService } from './services/recipe.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingItemComponent,
    ErrorPageComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
