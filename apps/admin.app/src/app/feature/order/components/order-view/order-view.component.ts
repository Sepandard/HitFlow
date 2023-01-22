import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { OrderApiService } from '../../api/order-api.service';
import { Order, OrderStatusLabel } from '../../api/order.model';

@Component({
  selector: 'hf-admin-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
})
export class OrderViewComponent {
  private _isEditing: boolean = false;
  public statusLabel = OrderStatusLabel;
  public currentStatusLabel!: string;
  private _id!: number;
  public loading: boolean = false;
  public model!: Order;
  constructor(
    private route: ActivatedRoute,
    private api: OrderApiService,
    private notification: NotificationsService
  ) {
    this.route.paramMap.subscribe((params) => {
      this._id = Number(params.get('id'));
      this.getDataById();
    });
  }
  public get id(): number {
    return this._id;
  }

  public get isEditing(): boolean {
    return this._isEditing;
  }

  getDataById() {
    this.loading = true;
    if (this.id) {
      this.api
        .getById(this.id)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: (value) => {
            this.model = value;
            this.currentStatusLabel = this.statusLabel[this.model.status];
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  changeStatus() {
    
    if (!this.model) return;
    this.loading = true;
    this.api
      .changeStatus(this.model, this.id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (value) => {
          this.model = value;
          this.currentStatusLabel = this.statusLabel[this.model.status];
        },
        error: (error) => {
          this.notification.showError(error);
        },
      });
  }

  handlePrevious() {
    this.model = { ...this.model, status: this.model.status - 1 };
    this.changeStatus();
  }

  handleAfter() {
    this.model = { ...this.model, status: this.model.status + 1 };

    this.changeStatus();
  }

  handleEdit() {
    this._isEditing = true;
    this.getDataById(); 
  }
  handleDisable() {
    this._isEditing = false;
    this.getDataById();
  }
}
