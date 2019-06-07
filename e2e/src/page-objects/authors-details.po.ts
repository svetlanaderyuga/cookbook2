import {$, $$, browser, by, element} from 'protractor';

export class AuthorsDetails {
  authorsTitle = $('#authorsTitle');
  authorsId = $('#authorsId');
  authorsInputName = element(by.name('FN'));
  authorsImage = $('#imageAuthors');
  goBackBtn = element(by.id('goBackBtn'));
  authorsTab = element(by.css('[routerLink="/authors"]'));

  async clickGoBackBtn(): Promise<void> {
    return await this.goBackBtn.click();
  }
  async getAuthorsTitle(): Promise<string> {
    return await this.authorsTitle.getText();
  }
  async getAuthorsId(): Promise<string> {
    return await this.authorsId.getText();
  }
  async getAuthorsName(): Promise<string>{
      return await this.authorsInputName.getText();
  }
  async isAuthorsImageDisplayed(): Promise<boolean> {
    return await this.authorsImage.isDisplayed();
  }
  async clickAuthorsTab(): Promise<void>{
      return await this.authorsTab.click();
  }
  
}