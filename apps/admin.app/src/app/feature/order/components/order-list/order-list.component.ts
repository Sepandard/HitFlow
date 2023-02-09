import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { OrderEndpoint } from '../../api/order.endpoint';
import { GenderLabel, Order, OrderStatusLabel } from '../../api/order.model';

@Component({
  selector: 'hf-admin-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  columnDefs: ColDef[] = [
    { field: 'code' },
    { headerName: 'User Email', field: 'userEmail' },
    { headerName: 'User Phone Number', field: 'userPhoneNumber' },
    {
      headerName: 'username',
      field: 'username',
    },
    {
      headerName: 'status',
      field: 'status',
      cellRenderer: (cell: any) => {
        const model: Order = cell.data;
        const { status } = model;
        
        return OrderStatusLabel[status];
      },
    },
    {
      headerName: 'gender',
      field: 'userGender',
      cellRenderer: (cell: any) => {
        const model: Order = cell.data;
        const { userGender } = model;
        return GenderLabel[userGender];
      },
    },
    { headerName: 'Last Change', field: 'lastChange' },
    { headerName: 'Creation Time', field: 'creationTime' },
  ];
  clientSideData: any[] = [];
  public endpoint = OrderEndpoint.base;
  constructor() {}
}
