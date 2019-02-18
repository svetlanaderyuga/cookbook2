import { Component, OnInit } from '@angular/core';
import { Category } from '../../modules/category';
import { CATEGORIES } from '../../modules/mock-categories';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
  
})

export class CategoriesComponent implements OnInit {
  categories = CATEGORIES;
  selectedCategory: Category;
  showCategories: boolean = false;
  
   constructor() { }
 
  ngOnInit() {
    
  }

  toggleCategories():void {
    this.showCategories = !this.showCategories;
  }
 
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}