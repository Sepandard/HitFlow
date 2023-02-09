import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartEndpoint } from './cart.endpoint';
import { Cart, OrderStatus } from './cart.model';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  getAll(orderStatus: OrderStatus) {
    return this.http.get<Cart[]>(CartEndpoint.base, {
      params: new HttpParams({
        fromObject: {
          status: orderStatus
        }
      })
    });
  }  
  
  total(orderStatus: OrderStatus) {
    return this.http.get<string>(CartEndpoint.total, {
      params: new HttpParams({
        fromObject: {
          status: orderStatus
        }
      })
    });
  }
}
