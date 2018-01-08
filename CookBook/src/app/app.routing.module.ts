import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
const appRoutes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes', component: RecipesComponent},
    { path: 'recipes/:id', component: RecipesComponent},
    { path: 'cart', component: ShoppingListComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }