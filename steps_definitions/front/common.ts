import { expect } from "@playwright/test";
import { Given, Then, When } from "../../support/fixtures";

Given("que estoy en la pagina de login de Swag Labs", async ({ loginPage }) => {
  await loginPage.visit();
  await expect(loginPage.loginLogo).toBeVisible();
});

When(
  "ingreso el username {string} y password {string}",
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.login(username, password);
  },
);

Then(
  "deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs",
  async ({ page, homePage }) => {
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(homePage.logoSwagLabs).toBeVisible();
  },
);

Then(
  "verifico que se muestre el mensaje de error {string}",
  async ({ loginPage }, errorMessage: string) => {
    await expect(loginPage.errorMessage).toContainText(errorMessage);
  },
);
