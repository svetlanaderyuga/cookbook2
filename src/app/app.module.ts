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
import { RecipesComponent } from './components/recipes/recipes.component';






@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    CategoriesComponent,
    IngredientsComponent,
    AuthorsComponent,
    MessagesComponent,
    DashboardComponent,
    AuthorsDetComponent
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
