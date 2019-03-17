import { Component, OnInit } from '@angular/core';
import { Author } from '../../modules/author';
import { AuthorsService } from '../../services/authors.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  authors: Author[] = [];
 
  constructor(private authorService: AuthorsService) { }
 
  ngOnInit() {
    this.getAuthors();
  }
 
  getAuthors(): void {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors.slice(0, 4));
  }
}