import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserEndpoint } from '../../api/user.endpoint';
import {
  GenderLabel,
  RoleLabel,
  StatusLabel,
  User,
} from '../../api/user.model';

@Component({
  selector: 'hf-admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'email' },
    {
      headerName: 'gender',
      field: 'genderId',
      cellRenderer: (cell: any) => {
        const model: User = cell.data;
        const { genderId } = model;
        return GenderLabel[genderId];
      },
    },

    {
      headerName: 'Role',
      field: 'roleId',
      cellRenderer: (cell: any) => {
        const model: User = cell.data;
        const { roleId } = model;
        return RoleLabel[roleId];
      },
    },
    {
      headerName: 'Status',
      field: 'statusId',
      cellRenderer: (cell: any) => {
        const model: User = cell.data;
        const { statusId } = model;
        return StatusLabel[statusId];
      },
    },
    { headerName: 'Last Login', field: 'lastLogin' },
    { headerName: 'Phone Number', field: 'phoneNumber' },
  ];
  clientSideData: any[] = [];
  public endpoint = UserEndpoint.base;
  constructor() {}

}
