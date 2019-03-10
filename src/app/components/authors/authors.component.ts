import { Component, OnInit } from '@angular/core';
import { Author } from '../../modules/author';
//import { AUTHORS } from '../../modules/mock-authors';
import { AuthorsService } from '../../services/authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  //authors = AUTHORS;
  authors: Author[];
  selectedAuthor: Author;
  ButtonName: string ;
  State:boolean ;

  constructor(private authorsService:AuthorsService) { }

  ngOnInit() {
    this.getAuthors();
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
  getAuthors(): void{
    this.authorsService.getAuthors()
    .subscribe(authors=>this.authors=authors);
  }
}

