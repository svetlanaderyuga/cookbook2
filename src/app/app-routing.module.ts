import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent }  from './components/category-detail/category-detail.component';
import { RecipesComponent} from 'src/app/components/recipes/recipes.component';
import { RecipeDetailComponent }  from './components/recipe-detail/recipe-detail.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: CategoryDetailComponent },
{ path: 'categories', component: CategoriesComponent },
{ path: 'recipedetails/:id', component: RecipeDetailComponent },
{ path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
