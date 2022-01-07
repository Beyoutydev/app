/* eslint-disable max-len */
import { SERVICE_CATEGORY } from "src/domain/enums";
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
  
  "login-page_title": "Inicia sesión",
  "login-page_email-label": "Email",
  "login-page_password-label": "Contraseña",
  "login-page_login-button": "Iniciar sesión",

  "service-page_title": "Crear servicio",
  "service-page_name-label": "Nombre",
  "service-page_category-label": "Tipo de servicio",
  "service-page_location-label": "Ubicación",
  "service-page_price-label": "Precio",
  "service-page_start-label": "Fecha de inicio",
  "service-page_end-label": "Fecha de fin",
  "service-page_duration-label": "Duración",
  "service-page_description-label": "Descripción",
  "service-page_create-button": "Crear servicio",

  [SERVICE_CATEGORY.HAIRCUT]: "Corte de pelo",
  [SERVICE_CATEGORY.MAKEUP]: "Maquillaje",
  [SERVICE_CATEGORY.EYEBROWS]: "Cejas",
  [SERVICE_CATEGORY.NAILS]: "Uñas",
  [SERVICE_CATEGORY.HAIRSTYLE]: "Peinado",
  [SERVICE_CATEGORY.MASSAGE]: "Masaje",
  [SERVICE_CATEGORY.DEPILATION]: "Depilación",
  [SERVICE_CATEGORY.FACIAL_TREATMENT]: "Tratamiento facial",
  [SERVICE_CATEGORY.MULTISERVICES]: "multiservices",
}
