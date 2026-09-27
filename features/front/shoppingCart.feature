# language: es
Característica: Validación de la funcionalidad del carrito de compras en Swag Labs

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-001 Realizar una compra exitosa de un producto
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces debería iniciar sesión exitosamente y ser redirigido a la página de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Y abro el carrito de compras
    Entonces el producto "<productName>" debería visualizarse en el carrito de compras
    Cuando inicio el checkout
    Y ingreso el nombre "<name>", apellido "<lastName>" y código postal "<postalCode>"
    Entonces el resumen del checkout debería incluir el producto "<productName>"
    Cuando finalizo la compra
    Entonces debería visualizarse el mensaje de compra exitosa

    Ejemplos:
      | userName      | password     | productName         | name   | lastName | postalCode |
      | standard_user | secret_sauce | Sauce Labs Backpack | Matias | Murua    | 500        |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-002 Realizar una compra exitosa de múltiples productos
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces debería iniciar sesión exitosamente y ser redirigido a la página de inicio de Swag Labs
    Cuando agrego los productos "<productName1>", "<productName2>" y "<productName3>" al carrito de compras
    Entonces el contador del carrito debería mostrar 3 productos
    Cuando abro el carrito de compras
    Entonces los productos "<productName1>", "<productName2>" y "<productName3>" deberían visualizarse en el carrito de compras
    Cuando inicio el checkout
    Y ingreso el nombre "<name>", apellido "<lastName>" y código postal "<postalCode>"
    Entonces el resumen del checkout debería incluir los productos "<productName1>", "<productName2>" y "<productName3>"
    Cuando finalizo la compra
    Entonces debería visualizarse el mensaje de compra exitosa

    Ejemplos:
      | userName      | password     | productName1        | productName2            | productName3     | name   | lastName | postalCode |
      | standard_user | secret_sauce | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt | Sauce Labs Onesie | Matias | Murua    | 500        |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-003 Eliminar un producto del carrito de compras
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces debería iniciar sesión exitosamente y ser redirigido a la página de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Y abro el carrito de compras
    Entonces el producto "<productName>" debería visualizarse en el carrito de compras
    Cuando elimino el producto "<productName>" del carrito de compras
    Entonces el producto "<productName>" debería ser eliminado del carrito de compras exitosamente

    Ejemplos:
      | userName      | password     | productName         |
      | standard_user | secret_sauce | Sauce Labs Backpack |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-004 Checkout con campos obligatorios vacíos
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces debería iniciar sesión exitosamente y ser redirigido a la página de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Y abro el carrito de compras
    Entonces el producto "<productName>" debería visualizarse en el carrito de compras
    Cuando inicio el checkout
    Y continúo el checkout con campos obligatorios vacíos
    Entonces verifico el mensaje de error de checkout "Error: First Name is required"

    Ejemplos:
      | userName      | password     | productName         |
      | standard_user | secret_sauce | Sauce Labs Backpack |
