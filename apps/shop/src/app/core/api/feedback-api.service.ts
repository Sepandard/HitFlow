import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackEndpoint } from './feedback.endpoint';
import { FeedbackModel, FeedbackResponse } from './feedback.model';


@Injectable()
export class FeedbackApiService {

  constructor(private http: HttpClient) { }
 
  public  postFeedback(model:FeedbackModel){
   return this.http.post<FeedbackResponse[]>(FeedbackEndpoint.base,model)
  } 
}
