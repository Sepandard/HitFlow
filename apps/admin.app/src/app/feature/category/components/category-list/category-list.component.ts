import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CategoryEndpoint } from '../../api/category-api.endpoint';

@Component({
  selector: 'hit-flow-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  columnDefs: ColDef[] = [{ field: 'title' }];
  public endpoint = CategoryEndpoint.base;
}
