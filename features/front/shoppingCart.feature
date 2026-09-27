# language: es
Característica: Validación de la funcionalidad del carrito de compras en Swag Labs

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-001 Realizar una compra exitosa de un producto
    Dado que estoy en la pagina de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Entonces el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    Cuando ingreso el nombre "<name>", apellido "<lastName>" y codigo postal "<postalCode>" para realizar el checkout
    Entonces la compra del producto "<productName>" deberia ser realizada exitosamente

    Ejemplos:
      | userName      | password     | productName         | name   | lastName | postalCode |
      | standard_user | secret_sauce | Sauce Labs Backpack | Matias | Murua    | 500        |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-002 Realizar una compra exitosa de multiples productos
    Dado que estoy en la pagina de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Cuando agrego los productos "<productName1>", "<productName2>" y "<productName3>" al carrito de compras
    Entonces los productos "<productName1>", "<productName2>" y "<productName3>" deberian ser agregados al carrito de compras exitosamente
    Cuando ingreso el nombre "<name>", apellido "<lastName>" y codigo postal "<postalCode>" para realizar el checkout
    Entonces la compra de los productos "<productName1>", "<productName2>" y "<productName3>" deberia ser realizada exitosamente

    Ejemplos:
      | userName      | password     | productName1        | productName2            | productName3     | name   | lastName | postalCode |
      | standard_user | secret_sauce | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt | Sauce Labs Onesie | Matias | Murua    | 500        |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-003 Eliminar un producto del carrito de compras
    Dado que estoy en la pagina de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Entonces el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    Y elimino el producto "<productName>" del carrito de compras
    Entonces el producto "<productName>" deberia ser eliminado del carrito de compras exitosamente

    Ejemplos:
      | userName      | password     | productName         |
      | standard_user | secret_sauce | Sauce Labs Backpack |

  @shoppingCart
  Esquema del escenario: TC-SHOPPING-006 Checkout con campos obligatorios vacios
    Dado que estoy en la pagina de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Cuando agrego el producto "<productName>" al carrito de compras
    Entonces el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    Cuando intento realizar checkout con campos obligatorios vacios
    Entonces verifico el mensaje de error de checkout "Error: First Name is required"

    Ejemplos:
      | userName      | password     | productName         |
      | standard_user | secret_sauce | Sauce Labs Backpack |
