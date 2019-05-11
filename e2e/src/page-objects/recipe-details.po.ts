import { $ } from 'protractor';

export class RecipeDetails {

  recipeTitle = $('#recipeTitle');
  recipeId = $('#recipeId');
  recipeImage = $('#imageRecipes');
  goBackButton = $('#goBackButton');

  async getRecipeTitle(): Promise<string> {
    return await this.recipeTitle.getText();
  }
  async getRecipeId(): Promise<string> {
    return await this.recipeId.getText();
  }
  async isRecipeImageDisplayed(): Promise<boolean> {
    return await this.recipeImage.isDisplayed();
  }
  async clickGoBack(): Promise<void> {
    return await this.goBackButton.click();
  }
}
