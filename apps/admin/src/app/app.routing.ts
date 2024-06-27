import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/core/components';
import { PageFrameComponent } from './features/page-frame/page-frame.component';

const routes: Routes = [
  {
    path: 'page-frame',
    loadComponent: () =>
    import('./features/page-frame/page-frame.component').then(
      (m) => m.PageFrameComponent
    ),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'page',
        loadComponent: () =>
          import('./features/page-heatmap/page-heatmap.component').then(
            (m) => m.PageHeatmapComponent
          ),
      },
      {
        path: 'report',
        loadComponent: () =>
          import('./features/report/report.component').then((m) => m.ReportComponent),
      },      
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
