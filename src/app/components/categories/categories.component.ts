import { Category } from '../../modules/category';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';



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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.addCategory({ name } as Category)
      .subscribe(hero => {
        this.categories.push(hero);
      });
  }

  delete(category: Category): void {
    this.categories = this.categories.filter(h => h !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }
}



