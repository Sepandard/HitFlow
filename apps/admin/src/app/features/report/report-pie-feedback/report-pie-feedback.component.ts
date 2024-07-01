import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ChartOptions } from '@app/core/model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Observable, map } from 'rxjs';
import { FeedbackFeeling, FeedbackFeelingTitle } from '../api/report-api.model';
import { ReportApiService } from '../api/report-api.service';

@Component({
  selector: 'hitflow-report-pie-feedback',
  templateUrl: './report-pie-feedback.component.html',
  styleUrls: ['./report-pie-feedback.component.scss'],
  imports: [NgIf, AsyncPipe, NgApexchartsModule],
  standalone: true,
})
export class ReportPieFeedbackComponent implements OnInit {
  public donutChartOptions?: Partial<ChartOptions> | any;
  public chartSeries!: Observable<number[]>;
  private api = inject(ReportApiService);

  ngOnInit(): void {
    this.populateChartOption();
    this.getData();
  }

  getData() {
    this.chartSeries = this.api.getFeedback().pipe(
      map((data) => {
        const res: number[] = [0, 0, 0, 0, 0];
        data.forEach((element) => {
          if (!res[element.feeling - 1]) {
            res[element.feeling - 1] = 1;
          } else {
            res[element.feeling - 1] = res[element.feeling - 1] + 1;
          }
        });
        return res;
      })
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
      labels: [
        FeedbackFeelingTitle[FeedbackFeeling.TERRIBLE],
        FeedbackFeelingTitle[FeedbackFeeling.BAD],
        FeedbackFeelingTitle[FeedbackFeeling.NORMAL],
        FeedbackFeelingTitle[FeedbackFeeling.GOOD],
        FeedbackFeelingTitle[FeedbackFeeling.FANATIC],
      ],

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
      colors: ['#FF4500', '#F2B500', '#00CFD5', '#0040FF', '#995AF2'],
    };
  }
}
