import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: 'create',
        component: CategoryCreateComponent,
      },
      {
        path: ':id',
        component: CategoryViewComponent,
      },
      { path: '**', component: CategoryListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
