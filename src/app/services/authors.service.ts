import { Author } from '../modules/author';
import { AUTHORS } from '../modules/mock-authors';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private messageService: MessageService) { }
  getAuthors(): Observable<Author[]> {
    //TODO:send message_after_fetching the Authors
    this.messageService.add('AuthorService: fetched authors');
    return of(AUTHORS);}

    getAuthor(id: number): Observable<Author> {
      this.messageService.add(`AuthorsService: fetched author id=${id}`);
      return of(AUTHORS.find(author => author.id === id));
    }
}

