import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardGraphComponent } from './dashboard/dashboard-graph/dashboard-graph.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
const routes: Routes = [
  {
    path: 'account',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },

    ]
  },
{
  path: 'dashboard',
  children: [
    { path: 'sidebar', component: SidebarComponent},
    { path: 'dashboard-graph', component: DashboardGraphComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'profile', component: ProfileComponent}

  ]
}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


