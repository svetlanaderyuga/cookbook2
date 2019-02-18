import { Component, OnInit } from '@angular/core';
import { INGREDIENT } from 'src/app/modules/mock-ingredients';
import {Ingredient} from 'src/app/modules/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients = INGREDIENT;
  isButtonClicked: boolean;
  buttonName: String;
  selectedIngredient: Ingredient;
 
  constructor() { }
 
  ngOnInit() {
    this.buttonName = 'Show Ingredients'
    this.isButtonClicked = false;
  }
  onClick(){
    this.isButtonClicked = !this.isButtonClicked;
    this.buttonName = this.isButtonClicked ? "Hide Ingredients" : "Show Ingredients";
  }

}
