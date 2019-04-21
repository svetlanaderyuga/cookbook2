import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './modules/recipe';
import { Category } from './modules/category';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Borsh', image: 'assets/images/recipes/borsh.jpeg' },
      { id: 12, name: 'Vatrushka Korolevskaya', image: 'assets/images/recipes/vatrushka.jpeg' },
      { id: 13, name: 'Pelmeny', image: 'assets/images/recipes/pelmeny.jpeg' },
      { id: 14, name: 'Kotlety', image: 'assets/images/recipes/kotlety.jpeg' },
      { id: 15, name: 'Salat Olivie', image: 'assets/images/recipes/olivye.jpeg' },
      { id: 16, name: 'Mac and Cheese', image: 'assets/images/recipes/macandcheese.jpeg' },
      { id: 17, name: 'Bliny', image: 'assets/images/recipes/bliny.jpeg' },
    ];
    const categories = [
      { id: 1, name: 'Salads ', image: 'assets/images/categories/salads.jpeg' },
      { id: 2, name: 'Soups ', image: 'assets/images/categories/soups.jpeg' },
      { id: 3, name: 'Main course ', image: 'assets/images/categories/mainCourse.jpeg' },
      { id: 4, name: 'Deserts ', image: 'assets/images/categories/desserts.jpeg' },
      { id: 5, name: 'Breakfasts ', image: 'assets/images/categories/breakfasts.jpeg' },
    ];
    return {recipes, categories};
  }

  // Overrides the genId method to ensure that a recipe always has an id.
  // If the recipes array is empty,
  // the method below returns the initial number (11).
  // if the recipes array is not empty, the method below returns the highest
  // recipe id + 1.
  genId<T extends Recipe | Category>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
