import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CategoriesComponent,
    DashboardComponent,
    IngredientsComponent,
    MessagesComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
