import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { BehaviorSubject, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'hf-admin-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit, OnDestroy {
  @Input() rowSelection: 'multiple' | 'single' = 'single';
  @Input() suppressRowNavigate: boolean = true;
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
    if (value) this._getData();
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
  @Output() currentItemChange: EventEmitter<any> = new EventEmitter<any>();

  public rowData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private _currentItem: any;
  private _loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  public get loading(): boolean {
    return this._loading;
  }

  public get currentItem() {
    return this._currentItem;
  }

  protected _onGridReady(event: any) {
    this.onGridReady.emit();
  }
  protected _onCellDoubleClicked(row: any) {
    this._currentItem = row;
    this.currentItemChange.emit(row);
  }

  protected _onCellClicked(row: any) {
    if (this.suppressRowNavigate) return;
    this.router.navigate([`${row.data.id}`], { relativeTo: this.route });
  }
  private _fetchData(params?: any) {
    const url = `${this.listEndpoint}}`;
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
      .subscribe({});
  }

  ngOnDestroy(): void {
    this.rowData$.unsubscribe();
  }
}
