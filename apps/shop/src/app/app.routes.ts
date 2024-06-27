import { Route } from '@angular/router';
import { LayoutComponent } from '@app/core/components';

export const appRoutes: Route[] = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 's',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
    ],
    
  },
];
