import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';

const dashboard: Dashboard = new Dashboard();

describe('Recipe Details', () => {
  beforeAll(async () => {
    await dashboard.navigateToDashboard();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
    await dashboard.clickFirstRecipe();
  });

  it('should be redirected to Recipe Details page', async () => {
    expect(await browser.getCurrentUrl()).toContain(
      'recipedetails',
      'Was not taken to Recipe Details page.'
    );
  });
});
