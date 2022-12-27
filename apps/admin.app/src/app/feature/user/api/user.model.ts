export interface User {
  name: string;
  email: string;
  genderId: Gender;
  lastLogin: string;
  roleId: Role;
  statusId: Status;
  phoneNumber:string
}

export enum Gender {
  Male = 1,
  Female = 2,
  Other = 3,
}

export enum Role {
  Admin = 1,
  User = 2,
}

export enum Status {
  Inactive = 1,
  Active = 2,
  banned = 3,
}

export const GenderLabel = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
  [Gender.Other]: 'Other',
} as const;

export const GenderField = [
  { value: Gender.Male, name: 'Male' },
  { value: Gender.Female, name: 'Female' },
  { value: Gender.Other, name: 'Other' },
];

export const RoleLabel = {
  [Role.Admin]: 'Admin',
  [Role.User]: 'User',
} as const;

export const RoleField = [
  { value: Role.Admin, name: 'Admin' },
  { value: Role.User, name: 'User' },
];

export const StatusLabel = {
  [Status.Inactive]: 'Inactive',
  [Status.Active]: 'Active',
  [Status.banned]: 'banned',
} as const;

export const StatusField = [
  { value: Status.Inactive, name: 'Inactive' },
  { value: Status.Active, name: 'Active' },
  { value: Status.banned, name: 'banned' },
];
