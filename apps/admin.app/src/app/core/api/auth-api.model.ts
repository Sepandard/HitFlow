export interface UserCredentialModel {
  email: string;
  password: string;
  name: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  loginStatus: LoginStatus;
  token: string;
}

export enum LoginStatus {
  Unspecified,
  Success,
  InvalidCredential,
  Error,
}
