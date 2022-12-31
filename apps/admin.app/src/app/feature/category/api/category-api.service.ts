import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryEndpoint } from './category-api.endpoint';
import { Category } from './category-api.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private http: HttpClient) {}

  create(model: Category) {
    return this.http.post<void>(CategoryEndpoint.base, model);
  }

  update(model: Category, id: number) {
    return this.http.put<void>(CategoryEndpoint.byId(id), model);
  }

  getById(id: number) {
    return this.http.get<Category>(CategoryEndpoint.byId(id));
  }
}
