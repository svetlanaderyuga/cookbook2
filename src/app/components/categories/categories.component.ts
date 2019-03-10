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

  selectedCategory: Category;
  showCategories: boolean = false;s
  
   constructor(private categoryService: CategoryService) { 

   }
 
  ngOnInit() {
    this.getCategories();

  }

  toggleCategories():void {
    this.showCategories = !this.showCategories;
  }
 
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
  
  getCategories(): void {
    this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
  }
}



