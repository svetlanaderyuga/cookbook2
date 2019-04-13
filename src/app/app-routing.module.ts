import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetComponent }  from './components/authors-det/authors-det.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RecipesComponent} from 'src/app/components/recipes/recipes.component';
import { RecipeDetailComponent }  from './components/recipe-detail/recipe-detail.component';
import { RouterModule, Routes} from '@angular/router';  

const routes: Routes =[
  { path: 'authors', component: AuthorsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'authorsdetails/:id', component: AuthorsDetComponent },
  { path: 'recipedetails/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}


