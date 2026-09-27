import { expect } from '@playwright/test';
import { Then, When } from '../../support/fixtures';

When(
  'agrego el producto {string} al carrito de compras',
  async ({ homePage }, productName: string) => {
    await expect(homePage.productName(productName)).toBeVisible();
    await homePage.addProductToCart(productName);
  },
);

Then(
  'el producto {string} deberia ser agregado al carrito de compras exitosamente',
  async ({ yourCartPage }, productName: string) => {
    await yourCartPage.open();
    await expect(yourCartPage.productName(productName)).toBeVisible();
  },
);

When(
  'ingreso el nombre {string}, apellido {string} y codigo postal {string} para realizar el checkout',
  async (
    { yourCartPage, yourInformationPage },
    firstName: string,
    lastName: string,
    postalCode: string,
  ) => {
    await yourCartPage.checkout();
    await yourInformationPage.fillInformation({ firstName, lastName, postalCode });
    await yourInformationPage.continue();
  },
);

Then(
  'la compra del producto {string} deberia ser realizada exitosamente',
  async ({ checkoutOverviewPage }, productName: string) => {
    await expect(checkoutOverviewPage.titleInformation).toHaveText('Checkout: Overview');
    await expect(checkoutOverviewPage.productName(productName)).toBeVisible();
    await checkoutOverviewPage.finishPurchase();
    await expect(checkoutOverviewPage.messageOrderSuccess).toHaveText(
      'Thank you for your order!',
    );
  },
);

Then(
  'elimino el producto {string} del carrito de compras',
  async ({ yourCartPage }, productName: string) => {
    await yourCartPage.removeProduct(productName);
  },
);

Then(
  'el producto {string} deberia ser eliminado del carrito de compras exitosamente',
  async ({ yourCartPage }, productName: string) => {
    await expect(yourCartPage.productName(productName)).toHaveCount(0);
  },
);

When(
  'agrego los productos {string}, {string} y {string} al carrito de compras',
  async (
    { homePage },
    productName1: string,
    productName2: string,
    productName3: string,
  ) => {
    const productNames = [productName1, productName2, productName3];

    for (const productName of productNames) {
      await expect(homePage.productName(productName)).toBeVisible();
    }

    await homePage.addProductsToCart(productNames);
    await expect(homePage.shoppingCartBadge).toHaveText(String(productNames.length));
  },
);

Then(
  'los productos {string}, {string} y {string} deberian ser agregados al carrito de compras exitosamente',
  async (
    { yourCartPage },
    productName1: string,
    productName2: string,
    productName3: string,
  ) => {
    await yourCartPage.open();

    for (const productName of [productName1, productName2, productName3]) {
      await expect(yourCartPage.productName(productName)).toBeVisible();
    }
  },
);

Then(
  'la compra de los productos {string}, {string} y {string} deberia ser realizada exitosamente',
  async (
    { checkoutOverviewPage },
    productName1: string,
    productName2: string,
    productName3: string,
  ) => {
    await expect(checkoutOverviewPage.titleInformation).toHaveText('Checkout: Overview');

    for (const productName of [productName1, productName2, productName3]) {
      await expect(checkoutOverviewPage.productName(productName)).toBeVisible();
    }

    await checkoutOverviewPage.finishPurchase();
    await expect(checkoutOverviewPage.messageOrderSuccess).toHaveText(
      'Thank you for your order!',
    );
  },
);

When(
  'intento realizar checkout con campos obligatorios vacios',
  async ({ yourCartPage, yourInformationPage }) => {
    await yourCartPage.checkout();
    await yourInformationPage.continue();
  },
);

Then(
  'verifico el mensaje de error de checkout {string}',
  async ({ yourInformationPage }, errorMessage: string) => {
    await expect(yourInformationPage.errorMessage).toContainText(errorMessage);
  },
);
