import { asyncFunctionHandler } from 'src/adapters/asyncFunctionHandler';
import { AUTH_URL } from "src/config/endpoints";
import { User } from 'src/domain/types';
import { ICreateUserInput, ILogInDto, IAuthCredentials } from 'src/types';
import { httpService } from "./HttpService";
import { storageService } from './StorageService';

class AuthService {
  async login(loginInput: ILogInDto): Promise<IAuthCredentials | undefined> {
    const loginFn = async (): Promise<IAuthCredentials> => {
      return (await httpService.post(AUTH_URL.LOGIN, {...loginInput})).data;
    }
    const authCredentials = await asyncFunctionHandler(loginFn);
    storageService.setAuthCredentials(authCredentials);
    return authCredentials;
  }

  async registerUser(user: ICreateUserInput): Promise<User> {
    const registerUserMethod = async () => {
      const payload = {
        ...user,
      };
      return (await httpService.post(AUTH_URL.SINGLE, payload)).data;
    }
    return asyncFunctionHandler(registerUserMethod);
  }
}

export const authService = new AuthService();
