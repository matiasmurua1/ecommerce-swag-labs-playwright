import type { Locator, Page } from '@playwright/test';

export class YourCartPage {
  readonly cartButton: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.cartButton = page.getByTestId('shopping-cart-link');
    this.checkoutButton = page.getByTestId('checkout');
  }

  productName(productName: string): Locator {
    return this.page.locator('.inventory_item_name', { hasText: productName });
  }

  private cartItem(productName: string): Locator {
    return this.page.locator('.cart_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });
  }

  async open(): Promise<void> {
    await this.cartButton.click();
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.cartItem(productName).getByRole('button', { name: 'Remove' }).click();
  }
}
