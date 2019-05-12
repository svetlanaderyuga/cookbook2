import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';
import {Categories} from '../page-objects/category-details.po';

const dashboard: Dashboard = new Dashboard();
const categories: Categories = new Categories();


describe('Category Details', () => {
  beforeAll(async () => {
    await dashboard.navigateToDashboard();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
    await dashboard.clickFirstCategory();
  });

  it('should be redirected to Category Details page', async () => {
    expect(await browser.getCurrentUrl()).toContain(
      'categorydetail',
      'Was not taken to Category Details page.'
    );
  });

  it('should be redirected to Dashoard page',async () => {
    await categories.goBackBtn.click();
    expect(await browser.getCurrentUrl()).toContain(
        'dashboard',
        'Was not taken to Dashboard page.'
      );
  });
});
