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
    { field: 'email' },
    {
      headerName: 'gender',
      field: 'genderId',
    },

    {
      headerName: 'Role',
      field: 'roleId',
    },
    {
      headerName: 'Status',
      field: 'statusId',
    },
    { headerName: 'Last Login', field: 'lastLogin' },
    { headerName: 'Phone Number', field: 'phoneNumber' },
  ];
  clientSideData: any[] = [];
  public endpoint = ProductEndpoint.base;
}
