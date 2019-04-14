import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetComponent } from './components/authors-det/authors-det.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AuthorsComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    DashboardComponent,
    IngredientsComponent,
    AuthorsDetComponent,
    MessagesComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
