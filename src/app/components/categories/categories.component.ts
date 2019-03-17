
import { Component, OnInit } from '@angular/core';
import { Category } from '../../modules/category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']

})

export class CategoriesComponent implements OnInit {
  categories: Category[];

  
   constructor(private categoryService: CategoryService) { 

   }
 
  ngOnInit() {
    this.getCategories();

  }
  getCategories(): void {
    this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
  }
}



