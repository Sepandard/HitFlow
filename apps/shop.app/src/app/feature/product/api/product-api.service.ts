import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEndpoint } from './product-api.endpoint';
import { Product } from './product-api.model';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(ProductEndpoint.base);
  }

  getById(id: number) {
    return this.http.get<Product>(
      ProductEndpoint.getById(id)
    );
  }
}
