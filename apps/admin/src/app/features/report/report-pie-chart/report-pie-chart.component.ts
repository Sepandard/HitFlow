import { Component, Input, OnInit } from '@angular/core';
import { REPORT_TRANSLATOR, ReportHit } from '../api/report-api.model';
import { Observable, map } from 'rxjs';
import { ChartOptions } from '@app/core/model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'hitflow-report-pie-chart',
  templateUrl: './report-pie-chart.component.html',
  styleUrls: ['./report-pie-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule, NgIf, AsyncPipe],
})
export class ReportPieChartComponent implements OnInit {
  @Input() data!: Observable<ReportHit[]>;
  public donutChartOptions?: Partial<ChartOptions> | any;
  public chartSeries!: Observable<number[]>;

  ngOnInit(): void {
    this.populateChartOption();
    this.mapImpressionChartSeries();
  }

  private mapImpressionChartSeries() {
    this.chartSeries = this.data.pipe(
      map((data) =>
        data
          .filter((item) => item.title !== REPORT_TRANSLATOR.impression)
          .map((item) => item.value)
      )
    );
  }
  private populateChartOption() {
    this.donutChartOptions = {
      chart: {
        toolbar: {
          show: false,
        },
        type: 'donut',
        height: 320,
      },
      labels: [REPORT_TRANSLATOR.movement, REPORT_TRANSLATOR.click],

      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '85%',
            labels: {
              show: true,
              name: {
                offsetY: -25,
                fontSize: '32px',
                fontWeight: 700,
              },
              value: {
                show: true,
                fontSize: '32px',
                fontWeight: 500,
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Impression',
                fontSize: '18px',
                fontWeight: 700,
                color: '#6E798D',
              },
            },
          },
        },
      },
      stroke: {
        show: false,
      },

      legend: {
        show: false,
      },
      colors: ['#995AF2', '#0040FF', '#00CFD5'],
    };
  }
}
