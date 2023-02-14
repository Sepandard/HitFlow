import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/authentication';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./product/product.module').then(
            (mod) => mod.ProductModule
          )
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./cart/cart.module').then(
            (mod) => mod.CartModule
          )
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./users/users.module').then(
            (mod) => mod.UsersModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
