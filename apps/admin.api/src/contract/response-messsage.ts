export enum Response {
    FIELD_REQUIRED,
    EMAIL_REQUIRED,
    EMAIL_USERNAME_REQUIRED,
    }

export const RESPONSE_MESSAGE = {
    [Response.EMAIL_USERNAME_REQUIRED]: 'Email is required',
    [Response.FIELD_REQUIRED]: 'Field is required',
    [Response.EMAIL_USERNAME_REQUIRED]: 'Email and username are required',
}



