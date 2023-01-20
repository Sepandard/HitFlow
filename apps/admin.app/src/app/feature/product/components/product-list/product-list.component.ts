import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ProductEndpoint } from '../../api/product-api.endpoint';

@Component({
  selector: 'hit-flow-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  columnDefs: ColDef[] = [
    { field: 'name' },
    {
      headerName: 'amount',
      field: 'amount',
    },   
     {
      headerName: 'category',
      field: 'categoryTitle',
    },
    {
      headerName: 'description',
      field: 'description',
    },
  ];
  public endpoint = ProductEndpoint.base;
}
