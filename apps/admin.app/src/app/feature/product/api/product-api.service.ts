import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEndpoint } from './product-api.endpoint';
import { Product } from './product-api.model';

@Injectable()
export class ProductApiService {
  constructor(private http: HttpClient) {}

  create(model : any){
    return this.http.post(ProductEndpoint.base,model)
  }
}
