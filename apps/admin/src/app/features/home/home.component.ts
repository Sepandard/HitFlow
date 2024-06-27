import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PACKAGE_CONFIG } from '@app/core/configs';
import { ResponsiveLayoutService } from '@app/core/services';

@Component({
  selector: 'hitflow-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [NgFor, NgClass, AsyncPipe, RouterModule],
})
export class HomeComponent {
  readonly configs = PACKAGE_CONFIG;
  public responsiveService = inject(ResponsiveLayoutService)

}
