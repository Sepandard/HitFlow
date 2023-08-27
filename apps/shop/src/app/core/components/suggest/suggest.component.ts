import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SuggestService } from '../../services';

@Component({
  selector: 'hf-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss'],
})
export class SuggestComponent {
  constructor(private service: SuggestService) {
    this.service.sync('40% off for orders over 250$')
  }

  public get message$() : Observable<string | null> {
    return this.service.$message
  } 
}
