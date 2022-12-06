import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'hf-admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
  ];
  clientSideData: any[] = [
    {
      make: 'Porsche',
      model: 'Boxter',
      price: 72000,
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
    },
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
    },
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
    },
    {
      make: 'Porsche',
      model: 'Boxter',
      price: 72000,
    },
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
