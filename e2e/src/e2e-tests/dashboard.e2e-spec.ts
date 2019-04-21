import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';

const dashboard: Dashboard = new Dashboard();

describe('Dashboard', () => {
  it('should navigate to the dashboard page', async () => {
    await dashboard.navigateToDashboard();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
  });
  it('should display the elements of the Top Recipes block', async () => {
    expect(await dashboard.getTopRecipeTitle()) .toBe(
      'Top Recipes',
      'Invalid title is displayed for Top Recipes.'
    );
  });
});
