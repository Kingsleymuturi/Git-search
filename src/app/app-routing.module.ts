import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {  NotfoundComponent } from './notfound/notfound.component';
import {ReposComponent} from './repos/repos.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  {path:"user-profile", component:UsersComponent, },
  {path:"repos-search", component:ReposComponent},
  {path:"about", component:AboutComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }