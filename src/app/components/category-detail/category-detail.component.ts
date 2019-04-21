import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/modules/category';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})


export class CategoryDetailComponent implements OnInit {

   category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.goBack());
  }

}
