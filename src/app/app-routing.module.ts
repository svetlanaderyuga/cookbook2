import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { RecipesComponent} from 'src/app/components/recipes/recipes.component';
import { RecipeDetailComponent }  from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipedetails/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
