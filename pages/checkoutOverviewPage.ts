import type { Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly titleInformation: Locator;
  readonly finishButton: Locator;
  readonly messageOrderSuccess: Locator;

  constructor(private readonly page: Page) {
    this.titleInformation = page.getByTestId('title');
    this.finishButton = page.getByTestId('finish');
    this.messageOrderSuccess = page.getByTestId('complete-header');
  }

  productName(productName: string): Locator {
    return this.page.locator('.inventory_item_name', { hasText: productName });
  }

  async finishPurchase(): Promise<void> {
    await this.finishButton.click();
  }
}
