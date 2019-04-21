import { Component, OnInit } from '@angular/core';
import { Author } from '../../modules/author';
import { AuthorsService } from '../../services/authors.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authors-det',
  templateUrl: './authors-det.component.html',
  styleUrls: ['./authors-det.component.css']
})
export class AuthorsDetComponent implements OnInit {
  // authors: Author[];
  author: Author;
  selectedAuthor: Author;

  constructor(
  private route: ActivatedRoute,
  private authorService: AuthorsService,
  private location: Location
  ) { }

  ngOnInit(): void{
    this.getAuthor();
  }
  getAuthor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id)
      .subscribe(author => this.author = author);
  }
  goBack(): void {
    this.location.back();
  }
  // onSelect(authors: Author): void {
  //   this.selectedAuthor = authors;
  }


