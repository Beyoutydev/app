import { IApplicationError } from "src/domain/types";
import { DEFAULT_ERROR_CODE, LOGIN_REDIRECT_ERROR_CODES } from "../constants/errors"
import { translationService } from "./TranslationService";

class ErrorHandlerService {

  handdleError(error: IApplicationError): string {
    if (error.code) {
      return translationService.translate(error.code, error.errorValues)
    }
    return translationService.translate(DEFAULT_ERROR_CODE)
  }
  
  checkIfRedirectToLoginIsRequired(error: IApplicationError): boolean {
    if (error.code) {
      return LOGIN_REDIRECT_ERROR_CODES.includes(error.code);
    }
    return false;
  }


}

export const errorHanddlerService = new ErrorHandlerService();
