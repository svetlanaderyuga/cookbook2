import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../modules/recipe';
import { RECIPES } from '../../modules/mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;

  selectedRecipe: Recipe;
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
