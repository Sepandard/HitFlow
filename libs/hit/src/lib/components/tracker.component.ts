import { Component, ElementRef, HostListener, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule, DOCUMENT, NgIf, NgOptimizedImage } from '@angular/common';
import { webSocket } from 'rxjs/webSocket';
import { Subscription, filter, tap } from 'rxjs';
import { HitGeneralValue } from '../config/general';
import { HttpClientModule } from '@angular/common/http';
import { TrackerService } from '../api/tracker-api.service';
import { ActivatedRoute } from '@angular/router';

declare let h337: any;

@Component({
  standalone: true,
  selector: 'hf-tracker',
  imports: [NgIf, NgOptimizedImage, CommonModule, HttpClientModule],
  providers: [TrackerService],
  template: `
      <div
        (click)="onTrack($event, generalValue.CLICK)"
        (mousemove)="onTrack($event, generalValue.MOVEMENT)"
        *ngIf="showHeatMap"
        class="w-100"
        #heatMap
      >
        <ng-content ></ng-content>
      </div>

  `,
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnDestroy {
  @Input() showHeatMap: boolean = true;
  @Input() disableTracking: boolean = false;
  @Input() isDesktop: boolean = true;
  @ViewChild('heatMap')
  private heatMapDiv: any;  

  public readonly generalValue = HitGeneralValue;
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
  private api = inject(TrackerService);
  private route = inject(ActivatedRoute);
  private document = inject(DOCUMENT);

  

  private heatMapInstance: any;
  private configs: any;
  private dataMin!: number;
  private dataMax!: number;
  private data: any;

  public ngOnInit(): void {
    this.socketSubscription = this.socketConnection.subscribe();
    this.route.queryParamMap
      .pipe(
        tap((param) => {
          console.log(param.get('heatmap'));
        }),
        filter((param) => !!param.get('heatmap'))
      )
      .subscribe({
        next: () => {
          this.showHeatMap = true;
          this.disableTracking = true;
          this.getData();
        },
      });
  }

  getData() {
    this.api.getHits().subscribe({
      next: (data) => {
        console.log(data);
        data.forEach((data) => {
          this.coordinates.push({
            x: data.value.x,
            y: data.value.y,
            value: data.value.value,
          });
          console.log(this.coordinates);

        });
        if (this.heatMapDiv) {
          this.setHeatMapData();
        }
      },
    });
  }

  ngAfterViewInit() {
  }

  public addPoint(point: any): void {
    this.heatMapInstance = this.heatMapInstance.addData(point);
  }

  onTrack(clickEvent: any, value = 15) {
    if (this.disableTracking) return;
    const hit = {
      x: clickEvent.x ,
      y: clickEvent.y + this.document.documentElement.scrollTop,
      isDesktop: this.isDesktop,
      value,
    };
    this.socketConnection.next({ message: hit });
    this.setHeatMapData();
  }

  private setHeatMapData() {
    if (!this.showHeatMap) return;
    this.heatMapInstance = h337
      .create({
        container: this.heatMapDiv.nativeElement,
      })
      .setData({ max: 30, data: this.coordinates, min: 10 });
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}
