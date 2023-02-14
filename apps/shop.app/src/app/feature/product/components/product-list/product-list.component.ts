import {
  AfterViewInit,
  Component,
  Input
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, switchMap } from 'rxjs';
import { Product } from '../../api/product-api.model';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hit-flow-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit {
  @Input() hasOff?: boolean = false;
  public loading: boolean = false;
  public data: Product[] = [];
  constructor(
    private api: ProductApiService,
    private route: ActivatedRoute
  ) {}
  ngAfterViewInit() {
    if (!this.hasOff) {
      this.getData();
    } else {
      this.getDataOff();
    }
  }

  getData() {
    this.route.queryParams
      .pipe(
        switchMap((searchParams) => {
          this.loading = true;
          return this.api
            .getAll(searchParams)
            .pipe(finalize(() => (this.loading = false)));
        })
      )
      .subscribe({
        next: (result) => {
          this.data = result;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  getDataOff() {
    this.loading = true;
    this.api
      .getOff()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (result) => {
          this.data = result;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
