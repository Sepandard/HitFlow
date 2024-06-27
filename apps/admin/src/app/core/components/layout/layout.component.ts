import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PackageConfig, PACKAGE_CONFIG } from '../../configs';
import { ResponsiveLayoutService } from '../../services';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ENVIRONMENT } from '../../../../environments/environments';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public readonly configs = PACKAGE_CONFIG;
  constructor(
    public responsiveService: ResponsiveLayoutService,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onChangeRoute(item: PackageConfig) {
    this.title.setTitle(item.title);

    this.router.navigate([item.route])
  }

  getProjectName() {
    return ENVIRONMENT.projectName;
  }
}
