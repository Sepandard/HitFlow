import { Injectable, Optional } from '@angular/core';
import { ApplicationConfig } from '../class/application-config.class';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private config!:ApplicationConfig
  constructor(@Optional() _appConfig: ApplicationConfig) {
    if(_appConfig)this.config = _appConfig
  }
  public get applicationName () :string {
    return this.config.environment.applicationName
  }
}
