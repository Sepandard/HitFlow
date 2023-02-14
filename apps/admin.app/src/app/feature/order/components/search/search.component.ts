import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderEndpoint } from '../../api/order.endpoint';
@Component({
  selector: 'hit-flow-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  form: string = '';
  columnDefs: ColDef[] = [
    { headerName: 'title', field: 'title' },
    { headerName: 'text', field: 'text' },
    { headerName: 'issue', field: 'issue' },
    { headerName: 'date', field: 'date' }
  ];
  clientSideData: any[] = [];
  public endpoint = OrderEndpoint.base;
  constructor(private http: HttpClient) {
    this.getData();
  }
  array$ = new BehaviorSubject<any>([]);
  public get array() {
    return this.array$.asObservable();
  }
  getData() {
    const _params = new URLSearchParams({});
    if (this.form) _params.append('search', this.form);
    this.http
      .get(`/api/product/search?${_params}`)
      .subscribe({
        next: (data) => {
          this.array$.next(data);
        }
      });
  }
}
