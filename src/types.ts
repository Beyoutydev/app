import { SERVICE_CATEGORY } from "./domain/enums";
import { User } from "./domain/types";

export interface IRegisterForm {
    name: string,
    surname: string,
    email: string,
    password: string,
    passwordRepeat: string,
    birthDate: string,
    address: string
}

export interface IServiceForm {
  name: string;
  category: SERVICE_CATEGORY;
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  price: number;
  description: string;
  qualifications?: string[];
  schedules?: string[];
}

export interface ICreateUserInput {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    address: string;
}

export interface ILogInDto {
  email: string;
  password: string;
}
export interface ICreateServiceDto {
  name: string;
  category: SERVICE_CATEGORY;
  location: string;
  startDate: string;
  endDate: string;
  duration?: string;
  price: number;
  description?: string;
  qualifications?: string[];
  schedules?: string[];
}
export interface IAuthCredentials {
  accessToken: string;
  refreshToken: string;
  expirationTime: number;
  user: User
}