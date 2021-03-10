import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/:id', component: UserPageComponent},
  {path: 'users', redirectTo: ""},
  {path: 'user-posts/:id', component: UserPostsComponent},


  {path: '*', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
