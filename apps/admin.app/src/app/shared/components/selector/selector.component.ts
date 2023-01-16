import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hit-flow-selector',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ displayText }}</mat-label>
      <mat-select
        #editor
        disableRipple
        (selectionChange)="internalValueChanged($event)"
      >
        <mat-option *ngFor="let item of selectOption" [value]="item.id">{{
          item.title
        }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorComponent),
      multi: true,
    },
  ],
})
export class SelectorComponent implements ControlValueAccessor {
  private _value!: number;
  disabled = false;
  _labels!: { id: number; text: string }[];

  @ViewChild('editor', { static: false }) editor?: ElementRef;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  displayText?: string | null;

  @Input()
  set value(value: number) {
    if (value !== this.value) {
      this._value = value;
      this.onModelChange(this._value);
      this.valueChange.emit(this._value);
    }
  }
  selectOption: any[] = [];

  @Input()
  set endpoint(endpoint: string) {
    this.http.get<any[]>(endpoint).subscribe({
      next: (data) => {
        this.selectOption = data;
      },
    });
  }

  get value(): number {
    return this._value;
  }

  internalValueChanged(event: any) {
    console.log(event);

    if (!this.editor) {
      return;
    }
    if (this.value !== event.value) {
      this.value = event.value;
    }
  }

  constructor(private http: HttpClient) {}

  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  writeValue(val: number): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
