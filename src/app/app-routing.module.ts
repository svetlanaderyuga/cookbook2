import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetComponent } from './components/authors-det/authors-det.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent} from 'src/app/components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'authors', component: AuthorsComponent},
  { path: 'authorsdetails/:id', component: AuthorsDetComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categorydetail/:id', component: CategoryDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipedetails/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
