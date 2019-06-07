import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';
import { AuthorsDetails } from '../page-objects/authors-details.po';

const dashboard: Dashboard = new Dashboard();
const authorsDetails: AuthorsDetails = new AuthorsDetails();

describe('Authors Details', () => {
  beforeAll(async () => {
    await dashboard.navigateToDashboard();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
    await dashboard.clickFirstAuthorDiv();
    expect(await browser.getCurrentUrl()).toContain(
      'authorsdetails',
      'Was not taken to Authors Details page.'
    );
  });
  it('should display the correct title on the recipe details page', async () => {
    expect(await authorsDetails.getAuthorsTitle()).toContain(
      'SVETLANA DERYUGA',
      'Wrong author title is displayed'
    );
  });
  it('should display a correct author id on the recipe details page', async () => {
    expect(await authorsDetails.getAuthorsId()).toContain(
      '1',
      'Wrong author id is displayed'
    );
  });
  it('should display name for the first name input on the recipe details page', async () => {
    //browser.sleep(1000);
    expect(await authorsDetails.getAuthorsName()).toBe(
      '',
      'Wrong author name is displayed'
    );
  });
  it('should display an image on the recipe details page', async () => {
    expect(await authorsDetails.isAuthorsImageDisplayed()).toBe(
      true,
      'Image is not displayed'
    );
  });
  it('should redirect to the dashboard page when go back button is clicked', async () => {
    await authorsDetails.clickGoBackBtn();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
  });
  it('should route to the authors page when authors tab is clicked', async () => {
    await authorsDetails.clickAuthorsTab();
    expect(await browser.getCurrentUrl()).toContain(
      'authors',
      'Was not taken to the Authors page.'
    );
  });
});
