import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'hitflow-page-frame',
  templateUrl: './page-frame.component.html',
  styleUrls: ['./page-frame.component.scss'],
  imports: [NgIf, AsyncPipe],
  standalone: true,
})
export class PageFrameComponent implements OnInit {
  public url = new Observable<string | null>();
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  ngOnInit(): void {
    this.url = this.route.queryParams.pipe(
      map((param: any) => param['url']),
      tap((url) => {
        if (!url) {
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
