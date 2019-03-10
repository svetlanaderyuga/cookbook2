import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../modules/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  recipes: Recipe[];
 
  constructor(private recipeService: RecipeService) { }
 
  ngOnInit() {
    this.getRecipes();
  }
 
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }
}
