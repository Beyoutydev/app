import { asyncFunctionHandler } from 'src/adapters/asyncFunctionHandler';
import { AUTH_URL } from "src/config/endpoints";
import { USER_ROLE } from 'src/domain/enums';
import { User } from 'src/domain/types';
import { ICreateUserInput } from 'src/types';
import { httpService } from "./HttpService";

class AuthService {

  async registerUser(user: ICreateUserInput): Promise<User> {
    const registerUserMethod = async () => {
      const payload = {
        ...user,
        role: USER_ROLE.USER,
      };
      return (await httpService.post(AUTH_URL.SINGLE, payload)).data;
    }
    return asyncFunctionHandler(registerUserMethod);
  }
}

export const authService = new AuthService();
