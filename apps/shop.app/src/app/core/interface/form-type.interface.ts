import { AbstractControl, FormControlStatus, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

type STATUS = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED'; //<- I don't know why Angular Team doesn't define it https://github.com/angular/angular/blob/7.2.7/packages/forms/src/model.ts#L15-L45)

export interface FormGroupType<T> extends FormGroup {
  controls: { [P in keyof T]: AbstractControlTyped<T[P]> };
  registerControl<P extends keyof T>(
    name: P,
    control: AbstractControlTyped<T[P]>
  ): AbstractControlTyped<T[P]>;
  registerControl<V = any>(
    name: string,
    control: AbstractControlTyped<V>
  ): AbstractControlTyped<V>;
  addControl<P extends keyof T>(
    name: P,
    control: AbstractControlTyped<T[P]>
  ): void;
  addControl<V = any>(name: string, control: AbstractControlTyped<V>): void;
  removeControl(name: keyof T): void;
  removeControl(name: string): void;
  setControl<P extends keyof T>(
    name: P,
    control: AbstractControlTyped<T[P]>
  ): void;
  setControl<V = any>(name: string, control: AbstractControlTyped<V>): void;
  contains(name: keyof T): boolean;
  contains(name: string): boolean;
  get<P extends keyof T>(path: P): AbstractControlTyped<T[P]>;
  getRawValue(): T & { [disabledProp in string | number]: any };
  // COPIED FROM AbstractControlTyped<T> BECOUSE TS NOT SUPPORT MULPILE extends FormGroup, AbstractControlTyped<T>
  readonly value: T;
  valueChanges: Observable<T>;
  readonly status: FormControlStatus;
  statusChanges: Observable<STATUS>;
  get<V = unknown>(
    path: Array<string | number> | string
  ): AbstractControlTyped<V> | null;
  setValue<V>(
    value: V extends T ? V : never,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
  patchValue(
    value: any,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
  reset<V>(
    value?: V extends Partial<T> ? V : never,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
}

interface AbstractControlTyped<T> extends AbstractControl {
  // BASE PROPS AND METHODS COMMON TO ALL FormControl/FormGroup/FormArray
  readonly value: T;
  valueChanges: Observable<T>;
  readonly status: FormControlStatus;
  statusChanges: Observable<STATUS>;
  type?: 'date' | 'amount';
  validationMessages?: { [key: string]: string };
  get<V = unknown>(
    path: Array<string | number> | string
  ): AbstractControlTyped<V> | null;
  setValue<V>(
    value: V extends T ? V : never,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
  patchValue<V>(
    value: V extends Partial<T> ? V : never,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
  reset<V>(
    value?: V extends Partial<T> ? V : never,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void;
}
