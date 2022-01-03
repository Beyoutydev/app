/* eslint-disable max-len */
import { DEFAULT_ERROR_CODE } from "../errors";

export const enUS: { [key: string]: string } = {
  "401": 'No autorizado',
  "460": 'La sesión ha expirado',
  "500": 'Erorr interno del servidor',
  [DEFAULT_ERROR_CODE]: 'Algo ha ocurrido. Por favor, inténtelo de nuevo más tarde',

  "register-page_title": "User register",
  "register-page_name-label": "name",
  "register-page_surname-label": "surname",
  "register-page_email-label": "email",
  "register-page_password-label": "password",
  "register-page_password-repeat-label": "repeat password",
  "register-page_passwords-not-equal": "The passwords are not equal",
  "register-page_birthdate-label": "birthdate",
  "register-page_address-label": "address",
  "register-page_register-button": "Register",

  "login-page_title": "Login",
  "login-page_email-label": "Email",
  "login-page_password-label": "Password",
  "login-page_login-button": "login",
}
