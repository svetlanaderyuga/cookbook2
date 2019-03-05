import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from '../modules/recipe';
import { RECIPES } from '../modules/mock-recipes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the recipes
    this.messageService.add('HeroService: fetched heroes');
    return of(RECIPES);
  }
}
