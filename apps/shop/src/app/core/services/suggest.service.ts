import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestService {
  public readonly message = new BehaviorSubject<string | null>(null)
  public readonly $message : Observable<string |  null> = this.message.asObservable()
  constructor() { }

  public sync(message: string){
    this.message.next(message)
  }

  public reset(){
    this.message.next(null)
  }


}
