# Swag Labs - Automatizacion E2E con Playwright

Proyecto de automatizacion End-to-End sobre [Swag Labs](https://www.saucedemo.com/), desarrollado con Playwright, TypeScript, Cucumber/Gherkin y el patron Page Object Model.

## Tecnologias

- Playwright Test 1.63
- TypeScript
- `playwright-bdd`
- Cucumber / Gherkin en espanol
- Page Object Model (POM)
- GitHub Actions

## Cobertura funcional

La suite contiene 7 escenarios parametrizados que generan 10 ejecuciones por navegador.

| Modulo | ID | Validacion |
| --- | --- | --- |
| Login | TC-LOGIN-001 | Inicio de sesion exitoso con tres tipos de usuario |
| Login | TC-LOGIN-002 | Mensaje de error para usuario bloqueado |
| Login | TC-LOGIN-003 | Mensaje de error con usuario o password incorrectos |
| Shopping Cart | TC-SHOPPING-001 | Compra exitosa de un producto |
| Shopping Cart | TC-SHOPPING-002 | Compra exitosa de multiples productos |
| Shopping Cart | TC-SHOPPING-003 | Eliminacion de un producto del carrito |
| Checkout | TC-SHOPPING-006 | Validacion de campos obligatorios vacios |

## Estructura

```text
ecommerce-swag-labs-playwright/
├── .github/workflows/playwright.yml
├── features/front/
│   ├── login.feature
│   └── shoppingCart.feature
├── pages/
│   ├── checkoutOverviewPage.ts
│   ├── homePage.ts
│   ├── loginPage.ts
│   ├── yourCartPage.ts
│   └── yourInformationPage.ts
├── steps_definitions/front/
│   ├── common.ts
│   └── shoppingCart.ts
├── support/fixtures.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

`playwright-bdd` transforma los archivos `.feature` en pruebas temporales dentro de `.features-gen/`. Esa carpeta se genera antes de cada ejecucion y no se versiona.

## Instalacion

```bash
npm install
npx playwright install
```

Para instalar solamente el navegador utilizado por CI:

```bash
npx playwright install chromium
```

## Ejecucion

```bash
# Suite completa en Chromium, Firefox y WebKit
npm test

# Suite de CI solo en Chromium
npm run test:ci

# Modo UI de Playwright
npm run test:open

# Navegador visible
npm run test:headed

# Debug con Playwright Inspector
npm run test:debug

# Ejecucion por tags de Cucumber
npm run test:login
npm run test:shopping-cart

# Abrir el ultimo reporte HTML
npm run test:report
```

La URL se puede reemplazar sin modificar codigo:

```bash
BASE_URL=https://otro-ambiente.example npm test
```

En PowerShell:

```powershell
$env:BASE_URL='https://otro-ambiente.example'; npm.cmd test
```

## Decisiones de diseno

- Los Page Objects encapsulan locators y acciones; las aserciones permanecen en los steps.
- Los productos se buscan dinamicamente por su nombre dentro de cada tarjeta. Los datos de Gherkin controlan realmente el producto seleccionado.
- Los fixtures crean una instancia de cada Page Object por escenario y comparten la misma pagina del navegador.
- Se priorizan `data-test`, roles y locators acotados al componente en lugar de IDs de productos fijos.
- Playwright aporta auto-waiting, aislamiento por contexto y evidencias de fallo sin esperas manuales.
- CI ejecuta Chromium para mantener un tiempo similar al pipeline original; localmente queda disponible la matriz completa.

## Evidencias

- Reporte HTML: `playwright-report/`
- Resultado JUnit: `test-results/junit-results.xml`
- Screenshots: solo ante fallos
- Traces: retenidas ante fallos y visibles con `npx playwright show-trace <archivo.zip>`
- Video: deshabilitado para reducir el espacio ocupado por las evidencias

## Autor

**Matias Nahuel Murua Martinez**
