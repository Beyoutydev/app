/* eslint-disable max-len */
import { SERVICE_CATEGORY } from 'src/domain/enums';
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

  "service-page_title": "Create service",
  "service-page_name-label": "Name",
  "service-page_category-label": "Serviec type",
  "service-page_location-label": "Ubication",
  "service-page_price-label": "Price",
  "service-page_start-label": "Start date",
  "service-page_end-label": "End date",
  "service-page_duration-label": "Duration",
  "service-page_description-label": "Description",
  "service-page_create-button": "Create service",

  [SERVICE_CATEGORY.HAIRCUT]: "Haircut",
  [SERVICE_CATEGORY.MAKEUP]: "Makeup",
  [SERVICE_CATEGORY.EYEBROWS]: "Eyebrows",
  [SERVICE_CATEGORY.NAILS]: "Nails",
  [SERVICE_CATEGORY.HAIRSTYLE]: "Hairstyle",
  [SERVICE_CATEGORY.MASSAGE]: "Massage",
  [SERVICE_CATEGORY.DEPILATION]: "Depilation",
  [SERVICE_CATEGORY.FACIAL_TREATMENT]: "Facial treatment",
  [SERVICE_CATEGORY.MULTISERVICES]: "Multiservices",
}
