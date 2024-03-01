import { DeviceDetectorService } from 'ngx-device-detector';
import { Injectable } from '@angular/core';
@Injectable()
export class DeviceDetector {
  constructor(private deviceDetectorService: DeviceDetectorService) {}

  public get isDesktop() {
    return this.deviceDetectorService.isDesktop();
  }
}
