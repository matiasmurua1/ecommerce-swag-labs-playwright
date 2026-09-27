import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly logoSwagLabs: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.logoSwagLabs = page.locator('.app_logo');
    this.shoppingCartBadge = page.getByTestId('shopping-cart-badge');
  }

  productName(productName: string): Locator {
    return this.page.locator('.inventory_item_name', { hasText: productName });
  }

  private productCard(productName: string): Locator {
    return this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.productCard(productName).getByRole('button', { name: 'Add to cart' }).click();
  }

  async addProductsToCart(productNames: string[]): Promise<void> {
    for (const productName of productNames) {
      await this.addProductToCart(productName);
    }
  }
}
