# language: es
Característica: Validación de inicio de sesión en Swag Labs

  @login
  Esquema del escenario: TC-LOGIN-001 Iniciar sesión con credenciales válidas
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces debería iniciar sesión exitosamente y ser redirigido a la página de inicio de Swag Labs

    Ejemplos:
      | userName               | password     |
      | standard_user          | secret_sauce |
      | problem_user           | secret_sauce |
      | performance_glitch_user| secret_sauce |

  @login
  Esquema del escenario: TC-LOGIN-002 Login con usuario bloqueado
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces verifico que se muestre el mensaje de error "Epic sadface: Sorry, this user has been locked out."

    Ejemplos:
      | userName        | password     |
      | locked_out_user | secret_sauce |

  @login
  Esquema del escenario: TC-LOGIN-003 Login con credenciales incorrectas
    Dado que estoy en la página de login de Swag Labs
    Cuando ingreso el username "<userName>" y password "<password>"
    Entonces verifico que se muestre el mensaje de error "Epic sadface: Username and password do not match any user in this service"

    Ejemplos:
      | userName      | password       |
      | invalid_user  | secret_sauce   |
      | standard_user | wrong_password |
