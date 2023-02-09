export interface UserCredentialModel {
  email: string;
  password: string;
  name: string;
}
export interface UserCreationModel {
  email: string;
  phoneNumber: string;
  password: string;
  name: string;
  genderId: Gender;
}

export enum Gender {
  Male,
  Female,
  Other,
}

export const GenderField = [
  { value: Gender.Male, name: 'مرد' },
  { value: Gender.Female, name: 'زن' },
  { value: Gender.Other, name: 'دیگر' },
];
export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  loginStatus: LoginStatus;
  name: string;
  token: string;
}
export interface SignupResponse {
  SignupStatus:SignupStatus
}

export enum LoginStatus {
  Unspecified,
  Success,
  InvalidCredential,
  Error,
}

export enum SignupStatus {
  Unspecified,
  Success,
  UserExist,
  Error,
}
