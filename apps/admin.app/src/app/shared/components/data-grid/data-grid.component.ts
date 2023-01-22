import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'hf-admin-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() rowSelection: 'multiple' | 'single' = 'single';
  @Input() suppressRowNavigate: boolean = false;
  @Input() loadingCellRendererParams: any = {
    loadingMessage: 'One moment please...',
  };
  @Input() columnDefs: ColDef[] = [];
  /* 
        example
        [
         { field: 'make'},
         { field: 'model'},
         { field: 'price' }
        ];
  */

  @Input() defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  @Input() set listEndpoint(value: string) {
    if (value) {
      this._listEndpoint = value;
    }
  }
  private _listEndpoint!: string;

  public get listEndpoint(): string {
    return this._listEndpoint;
  }
  @Input() set clientSideData(value: any[]) {
    if (value) {
      if (Array.isArray(value)) {
        this.rowData$.next(value);
      } else {
        throw new Error('clientSideData must be Array');
      }
    }
  }

  @Output() onGridReady: EventEmitter<void> = new EventEmitter<void>();
  @Output() dataInit: EventEmitter<void> = new EventEmitter<void>();
  @Output() currentItemChange: EventEmitter<any> = new EventEmitter<any>();

  private gridApi!: GridApi;
  public rowData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private _currentItem: any;
  private _loading: boolean = true;
  @Input()
  filters?: { [key: string]: string | number };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this._getData();
  }
   data: any[] = [];
  


  public get loading(): boolean {
    return this._loading;
  }

  public get currentItem() {
    return this._currentItem;
  }

  protected _onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDomLayout('autoHeight');
    this.gridApi.sizeColumnsToFit({
      defaultMinWidth: 100,
    });
    this.onGridReady.emit();
  }
  protected _onCellDoubleClicked(row: any) {
    if (this.suppressRowNavigate) return;
    this.router.navigate([`${row.data.id}`], { relativeTo: this.route });
  }

  protected _onCellClicked(row: any) {
    this._currentItem = row;
    this.currentItemChange.emit(row);
  }

  private _createQueryParams(filter: any) {
    console.log(this.filters);
    const _params = new URLSearchParams({});
    const output = Object.entries(filter).map(([key, value]) => ({
      key,
      value,
    }));

    output.forEach((f: any) => _params.append(f.key, `${f.value}`));

    return _params;
  }

  private _fetchData(params?: any) {
    const url = `${this.listEndpoint}?${this._createQueryParams(this.filters)}`;
    return this.http.get<any[]>(url);
  }

  private _getData() {
    this._loading = true;
    this._fetchData()
      .pipe(
        finalize(() => {
          this._loading;
        })
      )
      .subscribe({
        next: (value) => {
          this.data = value
          this.rowData$.next(value);
          this.dataInit.emit()
        },
      });
  }

  ngOnDestroy(): void {
    this.rowData$.unsubscribe();
  }
  refresh(event: any) {
    event.srcElement.classList.remove('refesh-icon-route');
    setTimeout(() => {
      event.srcElement.classList.add('refesh-icon-route');
    }, 0);
    this._getData();
  }
}
