import { NgOptimizedImage } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hf-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HomeSearchComponent),
      multi: true,
    },
  ],
})
export class HomeSearchComponent implements ControlValueAccessor {
  @Input('disabled') disabled: boolean = false
  value: string = '';


  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }
}
