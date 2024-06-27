import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ResponsiveLayoutService } from '@app/core/services';
import { ReportApiService } from './api/report-api.service';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, finalize, map, share } from 'rxjs';
import {
  REPORT_CONFIG,
  REPORT_TRANSLATOR,
  ReportHit,
  ReportHitType,
} from './api/report-api.model';
import { ChartOptions } from '@app/core/model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportPieChartComponent } from './report-pie-chart/report-pie-chart.component';
import { ReportLineChartComponent } from './report-line-chart/report-line-chart.component';

const MAT_MODULES = [MatCardModule];
@Component({
  selector: 'hitflow-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  standalone: true,
  imports: [
    MAT_MODULES,
    AsyncPipe,
    NgFor,
    NgClass,
    NgIf,
    HttpClientModule,
    ReportPieChartComponent,
    ReportLineChartComponent,
  ],
  providers: [ReportApiService],
})
export class ReportComponent implements OnInit {
  public responsiveService = inject(ResponsiveLayoutService);
  public loading: boolean = false;
  public data!: Observable<ReportHit[]>;

  private api = inject(ReportApiService);
  private readonly report = REPORT_CONFIG;

  

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    const titleToKeyMap = REPORT_TRANSLATOR;
    this.data = this.api.getReport().pipe(
      finalize(() => (this.loading = false)),
      map((data) => {
        return this.report.map((element) => {
          const key = titleToKeyMap[element.title as keyof ReportHitType];
          element.value = key ? data[key as keyof ReportHitType]?.length : 0;
          if (element.title === REPORT_TRANSLATOR.impression)
            element.value = data.click.length + data.movement.length;
          return element;
        });
      }),
      share()
    );
  }



}
