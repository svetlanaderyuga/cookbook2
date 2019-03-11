import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent} from 'src/app/components/recipes/recipes.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
