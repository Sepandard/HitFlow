import { Route } from '@angular/router';
import { LayoutComponent } from '@app/core/components';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
 
      {
        path: 'shop',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path:'**',
        redirectTo: '/shop'
      }
    ],
    
    
  },
];
