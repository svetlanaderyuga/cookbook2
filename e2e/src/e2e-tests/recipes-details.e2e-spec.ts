import { browser } from 'protractor';
import { Dashboard } from '../page-objects/dashboard.po';
import { RecipeDetails } from '../page-objects/recipe-details.po';

const dashboard: Dashboard = new Dashboard();
const recipeDetails: RecipeDetails = new RecipeDetails();

describe('Recipe Details', () => {
  beforeAll(async () => {
    await dashboard.navigateToDashboard();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
    await dashboard.clickFirstRecipe();
    expect(await browser.getCurrentUrl()).toContain(
      'recipedetails',
      'Was not taken to Recipe Details page.'
    );
  });
  it('should display the right title on the recipe details page', async () => {
    expect(await recipeDetails.getRecipeTitle()).toContain(
      'VATRUSHKA KOROLEVSKAYA',
      'Wrong recipe title is displayed'
    );
  });
  it('should display the right id on the recipe details page', async () => {
    expect(await recipeDetails.getRecipeId()).toContain(
      '12',
      'Wrong recipe id is displayed'
    );
  });
  it('should display image on the recipe details page', async () => {
    expect(await recipeDetails.isRecipeImageDisplayed()).toBe(
      true,
      'Image is not displayed'
    );
  });
  it('should redirect to the dashboard page when Go Back button is displayed', async () => {
    await recipeDetails.clickGoBack();
    expect(await browser.getCurrentUrl()).toContain(
      'dashboard',
      'Was not taken to Dashboard page.'
    );
  });
});
