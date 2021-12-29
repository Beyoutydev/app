/* eslint-disable max-len */
import { DEFAULT_ERROR_CODE } from "../errors";

export const esES: { [key: string]: string } = {
  "401": 'No autorizado',
  "460": 'La sesión ha expirado',
  "500": 'Erorr interno del servidor',
  [DEFAULT_ERROR_CODE]: 'Algo ha ocurrido. Por favor, inténtelo de nuevo más tarde',

  "register-page_title": "Registro de usuario",
  "register-page_name-label": "Nombre",
  "register-page_surname-label": "Apellidos",
  "register-page_email-label": "Email",
  "register-page_password-label": "Contraseña",
  "register-page_password-repeat-label": "Repetir contraseña",
  "register-page_passwords-not-equal": "Las contraseñas no coinciden",
  "register-page_birthdate-label": "Fecha de nacimiento",
  "register-page_address-label": "Dirección",
  "register-page_register-button": "Registrarse",
  
}
