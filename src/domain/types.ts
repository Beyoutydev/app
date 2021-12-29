import { USER_GENDER, USER_ROLE } from "./enums";

export interface User {
    _id?: string;
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    gender: USER_GENDER;
    address: string;
    ubication: IUbication;
    stripeAccount?: string;
    firebaseId: string;
    role: USER_ROLE;
    image: string;
    schedules?: string[];
    settings?: string[];
}

export interface IUbication {
    lat: number;
    long: number;
  }
  
  export interface IUserSettings {
    notifications: boolean;
    publicProfile: boolean;
  }

  export interface IApplicationError {
    status: number;
    message: string;
    code?: string;
    errorValues?: Record<string, string>
  }
  