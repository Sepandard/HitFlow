export interface Order {
  id: number;
  userId: number;
  code: string;
  status: OrderStatus;
  creationTime: number;
  lastChange: number;
  userGender: Gender;
  userPhoneNumber: string;
  userEmail: string;
  username: string;
}

export enum Gender {
  Male = 1,
  Female = 2,
  Other = 3
}

export const GenderLabel = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
  [Gender.Other]: 'Other'
} as const;

export enum OrderStatus {
  Unspecified,
  Cart,
  Submit,
  Payed,
  Confirmed,
  Delivered
}

export const OrderStatusLabel = {
  [OrderStatus.Unspecified]: 'Unspecified',
  [OrderStatus.Cart]: 'Cart',
  [OrderStatus.Submit]: 'Submit',
  [OrderStatus.Payed]: 'Payed',
  [OrderStatus.Confirmed]: 'Confirmed',
  [OrderStatus.Delivered]: 'Delivered'
} as const;

export interface CreateOrder {
  productId: number;
}
