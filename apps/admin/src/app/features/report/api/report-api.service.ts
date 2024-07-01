import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportEndpoint } from './report-api.endpoint';
import {
  FeedbackListItem,
  ReportHitType,
  ReportRangeHit,
} from './report-api.model';
import { FeedbackEndpoint } from './feedback.endpoint';

@Injectable()
export class ReportApiService {
  constructor(private http: HttpClient) {}
  public getReport() {
    return this.http.get<ReportHitType>(ReportEndpoint.type);
  }

  public getRange() {
    return this.http.get<ReportRangeHit[]>(ReportEndpoint.range);
  }

  public getFeedback() {
    return this.http.get<FeedbackListItem[]>(FeedbackEndpoint.base);
  }
}
