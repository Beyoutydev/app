export interface IRegisterForm {
    name: string,
    surname: string,
    email: string,
    password: string,
    passwordRepeat: string,
    birthDate: string,
    address: string
}

export interface ICreateUserInput {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    address: string;
}