export interface Cart {
  id: number;
  orderId: number;
  creationTime: string;
  productId: number;
  productName: string;
  userId: number;
  productCost: number;
  total: number;
  image: string;
  off: null;
  orderStatus: OrderStatus;
}

export enum OrderStatus {
  Unspecified,
  Cart,
  Submit,
  Payed,
  Confirmed,
  Delivered
}
