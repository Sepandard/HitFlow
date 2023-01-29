import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private _snackBar: MatSnackBar) {}
  showError(message: string) {
    this._snackBar.open(message, 'Done', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
