import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryViewComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
  ,providers:[]
})
export class CategoryModule { }
