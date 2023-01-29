import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/authentication/auth.guard';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./user/user.module').then((mod) => mod.UserModule),
      },
      {
        path: 'product',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
      },
      {
        path: 'category',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./category/category.module').then(
            (mod) => mod.CategoryModule
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
