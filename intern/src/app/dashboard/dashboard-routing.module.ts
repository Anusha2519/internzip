import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CallComponent } from './call/call.component';

const routes: Routes = [
  

      { path: 'sidebar', component: SidebarComponent},
      { path: 'dashboard-graph', component: DashboardGraphComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'call', component: CallComponent}

    
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
