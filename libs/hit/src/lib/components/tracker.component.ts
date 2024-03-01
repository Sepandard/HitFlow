import { Component, Input, Renderer2, ViewChild } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

declare let h337: any;

@Component({
  standalone: true,
  selector: 'hf-tracker',
  imports: [NgIf, NgOptimizedImage],
  template: `
    <div (click)="onTrack($event)">
      <div
        *ngIf="showHeatMap; else userView"
        class="w-100"
        id="heatmapContainer"
        #heatMap
      >
        <ng-content></ng-content>
      </div>
    </div>
    <ng-template #userView><ng-content></ng-content></ng-template>
  `,
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent {
  @ViewChild('heatMap')
  private heatMapDiv: any;

  @Input() showHeatMap: boolean = false;

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

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.setHeatMapData();
  }

  public addPoint(point: any): void {
    this.heatMapInstance = this.heatMapInstance.addData(point);
  }

  onTrack(clickEvent: any) {
    this.coordinates.push({
      x: clickEvent.layerX,
      y: clickEvent.layerY,
      value: 15,
    });

    console.log(this.coordinates);

    this.setHeatMapData();
  }

  private setHeatMapData() {
    if (!this.showHeatMap) return;
    this.heatMapInstance = h337
      .create({
        container: this.heatMapDiv.nativeElement,
      })
      .setData({ max: 10000, data: this.coordinates, min: 315 });
  }
}
