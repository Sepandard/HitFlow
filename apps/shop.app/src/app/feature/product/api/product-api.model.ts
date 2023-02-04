export interface Product {
  amount: number;
  categoryId: number;
  categoryTitle: string;
  description: string;
  id: number;
  image: string;
  name: string;
  cost: number;
  comment:Comment[]
}

export interface Comment {
  id: number,
  content:string,
  username:string,
  status:CommentStatus
}

export enum CommentStatus {
  Unspecified,
  No,
  Yes
}