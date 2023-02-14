import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentEndpoint } from './comment-api.endpoint';
import { OrderEndpoint } from './order.endpoint';
import { CreateOrder, Order } from './order.model';
import { ProductEndpoint } from './product-api.endpoint';
import {
  Comment,
  CreateComment,
  Product
} from './product-api.model';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getAll(params: any) {
    const productName = params.search ?? '';
    return this.http.get<Product[]>(ProductEndpoint.base, {
      params: new HttpParams({
        fromObject: {
          search: productName
        }
      })
    });
  }

  getById(id: number) {
    return this.http.get<Product>(
      ProductEndpoint.getById(id)
    );
  }

  createComment(model: CreateComment) {
    return this.http.post<void>(
      CommentEndpoint.base,
      model
    );
  }

  getComment(productId: number) {
    const _params = new URLSearchParams({});
    _params.append('productId', String(productId));
    return this.http.get<Comment[]>(
      `${CommentEndpoint.base}?${_params}`
    );
  }

  postOrder(model: CreateOrder) {
    return this.http.post<void>(OrderEndpoint.base, model);
  }

  getOff() {
    return this.http.get<Product[]>(ProductEndpoint.off);
  }
}
