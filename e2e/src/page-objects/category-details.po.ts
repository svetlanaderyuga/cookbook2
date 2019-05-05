import {$, $$, browser, by, element} from 'protractor';

export class Categories {
  
 goBackBtn = element(by.id('goBackBtn'));

  async clickGoBackBtn(): Promise<void> {
    return await this.goBackBtn.click();
  }
}