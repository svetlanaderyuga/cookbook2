import { Component, OnInit } from '@angular/core';
import { Author } from '../../modules/author';
import { AUTHORS } from '../../modules/mock-authors';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export  class AuthorsComponent implements OnInit {
  authors = AUTHORS;
  selectedAuthor: Author;
  ButtonName: string ;
  State:boolean ;

  constructor() { }

  ngOnInit() {
    this.ButtonName="Show Authors";
    this.State=false;
  }
  onSelect(authors: Author): void {
    this.selectedAuthor = authors;
  }

  toggle() {
    this.ButtonName = "Hide Authors";
    this.State = !this.State;
    this.ButtonName = this.State ? "Hide Authors" : "Show Authors";
  }
}
