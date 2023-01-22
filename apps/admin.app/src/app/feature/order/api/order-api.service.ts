import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderEndpoint } from './order.endpoint';
import { Order } from './order.model';

@Injectable()
export class OrderApiService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get<Order>(OrderEndpoint.byId(id));
  }

  changeStatus(model: Order, id: number) {
    return this.http.put<Order>(OrderEndpoint.changeStatus(id), model);
  }
}
