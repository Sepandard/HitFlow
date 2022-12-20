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
  selector: 'hf-admin-input',
  template: `
    <mat-form-field [style.font-size.px]=14 class="w-100" appearance="outline">
      <mat-label>{{ label }}</mat-label>
      <input
        #editor
        matInput
        [type]="type"
        [value]="value"
        (change)="onChange($event)"
        [placeholder]="placeholder"
        [disabled]="disabled"
      />
      <!-- //TODO: Add show and hide password  -->
      <!-- <button
        *ngIf="type === 'password'"
        mat-icon-button
        matSuffix
        (click)="_hide = !_hide"
        [attr.aria-label]="'Hide password'"
        [attr.aria-pressed]="_hide"
      >
        <mat-icon>{{ _hide ? 'visibility_off' : 'visibility' }}</mat-icon>
      </button> -->
    </mat-form-field>
  `,
  styleUrls: ['./input.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string | null;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
  @Input()
  set value(value: any) {
    if (value !== this.value) {
      this._value = value;
      this.onChange(this._value);
      this.valueChange.emit(this._value);
    }
  }
  @Output() valueChange = new EventEmitter<any>();
  @ViewChild('editor', { static: false }) editor!: ElementRef;
  private _value: any;
  _hide: boolean = false;

  get value(): any {
    return this._value;
  }

  constructor() {}

  onChange: Function = () => {};
  onModelTouched: Function = () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
