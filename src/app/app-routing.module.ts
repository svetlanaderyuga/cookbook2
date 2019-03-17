import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';  
import { AuthorsComponent } from './components/authors/authors.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { AuthorsDetComponent }  from './components/authors-det/authors-det.component';

const routes: Routes =[
  { path: 'authors', component: AuthorsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: AuthorsDetComponent },
]
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],  
})
export class AppRoutingModule { 
    
}


