import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LandingPage } from './landing-page-api.endpoint';
import { LandingPageEndpoint } from './landing-page-api.model';

@Injectable()
export class LandingPageApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<LandingPage>(LandingPageEndpoint.base);
  }  
  count() {
    return this.http.get<number>(LandingPageEndpoint.count);
  }  
  getById(id: number) {
    return this.http.get<LandingPage>(LandingPageEndpoint.byId(id));
  }

}
