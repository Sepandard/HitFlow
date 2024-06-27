import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Hit } from '../model/hit.model';
import { hitEndpoint } from './tracker-api.enpoint';

@Injectable()
export class TrackerService {
  private http = inject(HttpClient) ;

  constructor() { }

  getHits(page='/home'){
    return this.http.get<Hit[]>(hitEndpoint.base, {
      params: new HttpParams({
        fromObject: {
          page,
        },
      }),
    })
  }
}
