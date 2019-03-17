import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../modules/recipe';
import { RecipeService } from '../../services/recipe.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];
 
  constructor(private recipeService: RecipeService) { }
 
  ngOnInit() {
    this.getRecipes();
  }
 
  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(1, 5));
  }
}
