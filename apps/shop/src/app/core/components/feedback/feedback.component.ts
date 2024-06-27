import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'hf-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  @ViewChildren('feedbacks') feedbacks: QueryList<HTMLElement>;
  selectedElement: any = {};
  feedbackItems = [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
    {
      label: '5',
      value: 5,
    },
  ];

  private _bottomSheetRef: MatBottomSheetRef<FeedbackComponent> = inject(
    MatBottomSheetRef<FeedbackComponent>
  );

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
    this._bottomSheetRef.dismiss(this.selectedElement);
  }
}
