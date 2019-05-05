import {$, $$, browser, by, element} from 'protractor';

export class Dashboard {

  topRecipesTitle = $('#topRecipeTitle');
  firstRecipeDiv = element.all(by.css('div[id*=moduleRecipe]')).get(0);
  firstCategoryDiv = element.all(by.css('div[id*=moduleCategory]')).get(0);


  async navigateToDashboard(): Promise<void> {
    await browser.get('/dashboard');
  }
  async getTopRecipeTitle(): Promise<string> {
    return await this.topRecipesTitle.getText();
  }
  async clickFirstRecipe(): Promise<void> {
    return await this.firstRecipeDiv.click();
  }
  async clickFirstCategory(): Promise<void> {
    return await this.firstCategoryDiv.click();
  }
}
