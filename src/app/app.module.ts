import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoryDetailComponent }  from './components/category-detail/category-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    CategoriesComponent,
    IngredientsComponent,
    AuthorsComponent,
    MessagesComponent,
    DashboardComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
