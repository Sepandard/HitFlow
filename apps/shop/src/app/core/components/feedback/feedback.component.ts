import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FeedbackApiService } from '@app/core/api/feedback-api.service';
import { FeedbackFeeling } from '@app/core/api/feedback.model';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'hf-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [FeedbackApiService],
})
export class FeedbackComponent {
  @ViewChildren('feedbacks') feedbacks: QueryList<HTMLElement>;
  selectedElement: any = {};
  message: string = '';
  feedbackItems = [
    {
      label: '1',
      value: FeedbackFeeling.TERRIBLE,
    },
    {
      label: '2',
      value: FeedbackFeeling.BAD,
    },
    {
      label: '3',
      value: FeedbackFeeling.NORMAL,
    },
    {
      label: '4',
      value: FeedbackFeeling.GOOD,
    },
    {
      label: '5',
      value: FeedbackFeeling.FANATIC,
    },
  ];

  private _bottomSheetRef: MatBottomSheetRef<FeedbackComponent> = inject(
    MatBottomSheetRef<FeedbackComponent>
  );

  private api = inject(FeedbackApiService);
  private notification = inject(NotificationsService);

  onActiveFeedback(item) {
    if (item.value !== this.selectedElement.value)
      this.feedbacks.forEach((el) => {
        (el as any).nativeElement.classList.remove('active');
      });
    const elClassList = (this.feedbacks.get(item.value - 1) as any)
      .nativeElement.classList;
    if (elClassList.contains('active')) {
      elClassList.remove('active');
    } else {
      elClassList.add('active');
      this.selectedElement = item;
    }
  }

  submitForm() {
    this.api.postFeedback({
      feeling: this.selectedElement.value,
      message: this.message
    }).subscribe({
      next:(data)=>{
        this._bottomSheetRef.dismiss(data[0]);
        this.notification.showSuccess('Thanks for your feedback')
        this.message = ''
      }
    })
  }
}
