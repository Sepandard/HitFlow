import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component :UserComponent,
    children:[
      {
        path: 'comments',
        component: UserCommentsComponent
      }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
