import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
@Injectable()
export class AppInjectorsService {
  private static injector: Injector;
  static setInjector(injector: Injector) {
    AppInjectorsService.injector = injector;
  }

  static getInjector(): Injector {
    return AppInjectorsService.injector;
  }
}
