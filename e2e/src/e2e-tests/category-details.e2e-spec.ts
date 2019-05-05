import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';

const dashboard: Dashboard = new Dashboard();

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
});
