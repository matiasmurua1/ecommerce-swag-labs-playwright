import { expect } from '@playwright/test';
import { Then, When } from '../../support/fixtures';

When(
  'agrego el producto {string} al carrito de compras',
  async ({ homePage }, productName: string) => {
    await homePage.addProductToCart(productName);
  },
);

When('abro el carrito de compras', async ({ yourCartPage }) => {
  await yourCartPage.open();
});

Then(
  'el producto {string} debería visualizarse en el carrito de compras',
  async ({ yourCartPage }, productName: string) => {
    await expect(yourCartPage.productName(productName)).toBeVisible();
  },
);

When('inicio el checkout', async ({ yourCartPage }) => {
  await yourCartPage.checkout();
});

When(
  'elimino el producto {string} del carrito de compras',
  async ({ yourCartPage }, productName: string) => {
    await yourCartPage.removeProduct(productName);
  },
);

Then(
  'el producto {string} debería ser eliminado del carrito de compras exitosamente',
  async ({ yourCartPage }, productName: string) => {
    await expect(yourCartPage.productName(productName)).toHaveCount(0);
  },
);

When(
  'agrego los productos {string}, {string} y {string} al carrito de compras',
  async ({ homePage }, productName1: string, productName2: string, productName3: string) => {
    const productNames = [productName1, productName2, productName3];
    await homePage.addProductsToCart(productNames);
  },
);

Then(
  'el contador del carrito debería mostrar {int} productos',
  async ({ homePage }, productCount: number) => {
    await expect(homePage.shoppingCartBadge).toHaveText(String(productCount));
  },
);

Then(
  'los productos {string}, {string} y {string} deberían visualizarse en el carrito de compras',
  async ({ yourCartPage }, productName1: string, productName2: string, productName3: string) => {
    for (const productName of [productName1, productName2, productName3]) {
      await expect(yourCartPage.productName(productName)).toBeVisible();
    }
  },
);

When(
  'ingreso el nombre {string}, apellido {string} y código postal {string}',
  async ({ yourInformationPage }, firstName: string, lastName: string, postalCode: string) => {
    await yourInformationPage.fillInformation({ firstName, lastName, postalCode });
    await yourInformationPage.continue();
  },
);

Then(
  'el resumen del checkout debería incluir el producto {string}',
  async ({ checkoutOverviewPage }, productName: string) => {
    await expect(checkoutOverviewPage.titleInformation).toHaveText('Checkout: Overview');
    await expect(checkoutOverviewPage.productName(productName)).toBeVisible();
  },
);

Then(
  'el resumen del checkout debería incluir los productos {string}, {string} y {string}',
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
  },
);

When('finalizo la compra', async ({ checkoutOverviewPage }) => {
  await checkoutOverviewPage.finishPurchase();
});

Then('debería visualizarse el mensaje de compra exitosa', async ({ checkoutOverviewPage }) => {
  await expect(checkoutOverviewPage.messageOrderSuccess).toHaveText('Thank you for your order!');
});

When('continúo el checkout con campos obligatorios vacíos', async ({ yourInformationPage }) => {
  await yourInformationPage.continue();
});

Then(
  'verifico el mensaje de error de checkout {string}',
  async ({ yourInformationPage }, errorMessage: string) => {
    await expect(yourInformationPage.errorMessage).toContainText(errorMessage);
  },
);
