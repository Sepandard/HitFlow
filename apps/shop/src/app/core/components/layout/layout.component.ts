import { Component, inject, Inject } from '@angular/core';
import { IS_DESKTOP } from '@app/core/tokens/tokens';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'hf-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private _bottomSheet: MatBottomSheet = inject(MatBottomSheet);

  constructor(@Inject(IS_DESKTOP) public isDesktop: boolean) {}

  openFeedbackBottomSheet(): void {
    this._bottomSheet
      .open(FeedbackComponent)
      .afterDismissed()
      .subscribe((data) => {
        // TODO: Request to backend
        console.log(data);
      });
  }
}
