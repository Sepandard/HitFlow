export interface Product {
  amount: number;
  categoryId: number;
  categoryTitle: string;
  description: string;
  id: number;
  image: string;
  name: string;
  cost: number;
  off?: number
}

export interface Comment {
  id: number,
  content:string,
  username:string,
  isConfirmed:CommentStatus
}

export interface CreateComment{
  content:string,
  productId: number
}

export enum CommentStatus {
  Unspecified,
  Pending,
  Confirmed,
  Reject,
}


export const CommentStatusLabel = {
  [CommentStatus.Unspecified]: 'نامشحص',
  [CommentStatus.Pending]: 'در حال بررسی',
  [CommentStatus.Confirmed]: 'تایید شده',
  [CommentStatus.Reject]: 'رد شده',
} as const;