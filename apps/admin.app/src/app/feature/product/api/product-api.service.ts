import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEndpoint } from './product-api.endpoint';
import { Product } from './product-api.model';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  create(model: Product) {
    return this.http.post<void>(ProductEndpoint.base, model);
  }

  getById(id: number) {
    return this.http.get<Product>(ProductEndpoint.byId(id));
  }

  update(model:Product , id:number){
    return this.http.put<void>(ProductEndpoint.byId(id),model);
  }
}
