import { test as base, createBdd } from 'playwright-bdd';
import { CheckoutOverviewPage } from '../pages/checkoutOverviewPage';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { YourCartPage } from '../pages/yourCartPage';
import { YourInformationPage } from '../pages/yourInformationPage';

type PageFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  yourCartPage: YourCartPage;
  yourInformationPage: YourInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  yourCartPage: async ({ page }, use) => {
    await use(new YourCartPage(page));
  },
  yourInformationPage: async ({ page }, use) => {
    await use(new YourInformationPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
