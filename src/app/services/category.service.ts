import { Injectable } from '@angular/core';
import { Category } from '../modules/category';
import { CATEGORIES } from '../modules/mock-categories';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private messageService: MessageService) { }


  getCategories(): Observable<Category[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CategoryService: fetched categories');
    return of(CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategoryService: fetched category id=${id}`);
    return of(CATEGORIES.find(category => category.id === id));
  }
}


