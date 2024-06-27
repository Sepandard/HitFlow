import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Observable, map, share } from 'rxjs';
import { ChartOptions } from '@app/core/model';
import { ReportApiService } from '../api/report-api.service';
import * as moment from 'moment';

@Component({
  selector: 'hitflow-report-line-chart',
  templateUrl: './report-line-chart.component.html',
  styleUrls: ['./report-line-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule, NgIf, AsyncPipe,JsonPipe],
  providers: [ReportApiService],
})
export class ReportLineChartComponent {
  public donutChartOptions?: Partial<ChartOptions> | any;
  public chartSeries!: Observable<any>;
  private api = inject(ReportApiService);

  ngOnInit(): void {
    this.populateChartOption();
    this.mapImpressionChartSeries();
  }

  private mapImpressionChartSeries() {
    this.chartSeries = this.api.getRange().pipe(
      map((data) => {
        return [{
          name: 'Impression',
          data: data.map((item) => {
            return {
              x: moment.utc(item.time).format('DD/MM/YY hh:mm'),
              y: item.value,
            };
          }),
        }];
      }),
      share()
    );
  }

  private populateChartOption() {
    this.donutChartOptions = {
      chart: {
        animations: {
          enabled: false,
          easing: 'swing',
        },
        background: '#fff',
        dropShadow: {
          left: 30,
          blur: 0,
        },
        foreColor: '#373D3F',
        fontFamily: 'Roboto',
        height: 250,
        stackOnlyBar: true,
        toolbar: {
          show: false,
          tools: {
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        width: 800,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,

          isFunnel3d: true,
          dataLabels: {
            total: {
              enabled: false,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: '#373d3f',
                fontSize: '12px',
                fontWeight: 600,
              },
            },
          },
        },
      },
      colors: ['#995AF2', '#0040FF', '#00CFD5'],
      dataLabels: {
        enabled: false,
        style: {
          fontWeight: 700,
        },
      },
      legend: {
        show: false,
      },

      series: [
        {
          name: 'Line',
          data: [
            {
              x: 'Item 1',
              y: 31,
            },
            {
              x: 'Item 2',
              y: 40,
            },
            {
              x: 'Item 3',
              y: 28,
            },
            {
              x: 'Item 4',
              y: 51,
            },
            {
              x: 'Item 5',
              y: 42,
            },
          ],
          zIndex: 0,
        },
        {
          name: 'series-2',
          data: [
            {
              x: 'Item 1',
              y: '23',
            },
            {
              x: 'Item 2',
              y: '32',
            },
            {
              x: 'Item 3',
              y: '2',
            },
            {
              x: 'Item 4',
              y: '123',
            },
            {
              x: 'Item 5',
              y: '0',
            },
          ],
          zIndex: 1,
        },
        {
          name: 'series-3',
          data: [
            {
              x: 'Item 1',
              y: '100',
            },
            {
              x: 'Item 2',
              y: '65',
            },
            {
              x: 'Item 3',
              y: '123',
            },
            {
              x: 'Item 4',
              y: '200',
            },
            {
              x: 'Item 5',
              y: '123',
            },
          ],
          zIndex: 2,
        },
      ],
      stroke: {
        curve: 'straight',
        width: 4,
        fill: {
          type: 'solid',
          opacity: 0.85,
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },
      },
      tooltip: {
        hideEmptySeries: false,
      },
      xaxis: {
        offsetY: 6,
        labels: {
          trim: true,
          style: {
            fontWeight: 200,
          },
        },
        group: {
          groups: [],
          style: {
            colors: [],
            fontSize: '12px',
            fontWeight: 400,
            cssClass: '',
          },
        },
        axisBorder: {
          show: false,
        },
        tickAmount: 2,
        title: {
          style: {
            fontSize: 56,
            fontWeight: 100,
          },
        },
      },
    };
  }
}
