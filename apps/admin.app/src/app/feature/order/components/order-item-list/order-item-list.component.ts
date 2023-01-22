import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'hit-flow-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.scss'],
})
export class OrderItemListComponent implements OnInit {

  loading: boolean = false;
  @Input() set orderId(value: number) {
    if (value) {
      this.filters['orderId'] = value;
      this.loading = true;
      console.log(this.filters);
    }
  }
  @ViewChild('grid') grid!: DataGridComponent;
  columnDefs: ColDef[] = [
    { headerName: 'Product Name', field: 'productName' },
    { headerName: 'product Cost', field: 'productCost' },
    { headerName: 'Product Name', field: 'productName' },
  ];
  filters: { [key: string]: string | number } = {};
  model!:any
  ngOnInit(): void {
  }

  dataInit(){
    console.log(this.grid.data) 
    this.model = this.grid.data
  }
}
