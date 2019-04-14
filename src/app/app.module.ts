
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetComponent } from './components/authors-det/authors-det.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CategoriesComponent,
    DashboardComponent,
    IngredientsComponent,
    AuthorsComponent,
    MessagesComponent,
    DashboardComponent,
    AuthorsDetComponent,
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
