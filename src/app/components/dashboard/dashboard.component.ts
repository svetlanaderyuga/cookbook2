import { Category } from 'src/app/modules/category';
import { CategoryService } from '../../services/category.service';

import { Author } from '../../modules/author';
import { AuthorsService } from '../../services/authors.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../modules/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  authors: Author[] = [];
  categories: Category[] = [];
  recipes: Recipe[] = [];

  constructor(private authorService: AuthorsService, private categoryService: CategoryService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getAuthors();
    this.getCategories();
    this.getRecipes();
  }

  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors.slice(0, 4));
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.slice(1, 5));
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(1, 5));
  }
}
