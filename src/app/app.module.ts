import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
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
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorsDetComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    DashboardComponent,
    IngredientsComponent,
    MessagesComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeSearchComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
