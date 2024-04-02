import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule, NgIf, NgOptimizedImage } from '@angular/common';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';
import { GeneralValue } from '../config/general';

declare let h337: any;

@Component({
  standalone: true,
  selector: 'hf-tracker',
  imports: [NgIf, NgOptimizedImage, CommonModule],
  template: `
    <div>
      <div
        (click)="onTrack($event, generalValue.CLICK)"
        (mousemove)="onTrack($event, generalValue.MOVEMENT)"
        *ngIf="showHeatMap"
        class="w-100"
        #heatMap
      >
        <ng-content></ng-content>
      </div>
    </div>
    <!-- <ng-template #userView><ng-content></ng-content></ng-template> -->
  `,
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnDestroy {
  @Input() showHeatMap: boolean = true;
  @Input() disableTracking: boolean = false;
  @Input() isDesktop: boolean = true;
  @ViewChild('heatMap')
  private heatMapDiv: any;

  public readonly generalValue = GeneralValue;
  private socketSubscription!: Subscription;
  private socketConnection = webSocket('ws://localhost:5020/api/hit');

  @Input()
  public set configurations(config) {
    if (!config) {
      this.configs = {
        container: this.heatMapDiv.nativeElement,
      };
      return;
    }
    this.configs = config;
    this.setHeatMapData();
  }

  public get configurations(): any {
    return this.configs;
  }

  @Input()
  public set heatPoints(data: any) {
    this.data = data;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setData(data);
    }
  }

  @Input()
  public set maxDataPoints(value: number) {
    this.dataMax = value;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setDataMax(value);
    }
  }

  @Input()
  public set minDataPoints(value: number) {
    this.dataMin = value;
    if (this.heatMapInstance) {
      this.heatMapInstance = this.heatMapInstance.setDataMin(value);
    }
  }
  coordinates: any[] = [];

  private heatMapInstance: any;
  private configs: any;
  private dataMin!: number;
  private dataMax!: number;
  private data: any;


  public ngOnInit(): void {
    this.socketSubscription = this.socketConnection.subscribe();
  }

  public ngAfterViewInit(): void {
    this.setHeatMapData();
  }

  public addPoint(point: any): void {
    this.heatMapInstance = this.heatMapInstance.addData(point);
  }

  onTrack(clickEvent: any, value = 15) {
    // !Do NOT delete this one this is for demo
    // this.coordinates.push({
    //   x: clickEvent.layerX,
    //   y: clickEvent.layerY,
    //   value: 15,
    // });
    if (this.disableTracking) return;
    const hit = {
      x: clickEvent.layerX,
      y: clickEvent.layerY,
      isDesktop: this.isDesktop,
      value,
    };
    console.log(hit);
    this.socketConnection.next({ message: hit });
    this.setHeatMapData();
  }

  private setHeatMapData() {
    if (!this.showHeatMap) return;
    this.heatMapInstance = h337
      .create({
        container: this.heatMapDiv.nativeElement,
      })
      .setData({ max: 1000, data: this.coordinates, min: 100 });
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}
