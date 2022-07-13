import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },



  {path:"account", loadChildren:()=>import('./account/account.module')
.then(mod=>mod.AccountModule)
},
{path:"dashboard", loadChildren:()=>import('./dashboard/dashboard.module')
.then(mod=>mod.DashboardModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { RegisterComponent } from './account/register/register.component';
// import { LoginComponent } from './account/login/login.component';
// import { DashboardGraphComponent } from './dashboard/dashboard-graph/dashboard-graph.component';
// import { UsersListComponent } from './dashboard/users-list/users-list.component';
// import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
// import { ProfileComponent } from './dashboard/profile/profile.component';

// {
//   path: 'account',
//   children: [
//     { path: 'register', component: RegisterComponent },
//     { path: 'login', component: LoginComponent },

//   ]

// },
// {
// path: 'dashboard',
// children: [
//   { path: 'sidebar', component: SidebarComponent},
//   { path: 'dashboard-graph', component: DashboardGraphComponent },
//   { path: 'users-list', component: UsersListComponent },
//   { path: 'profile', component: ProfileComponent}

// ]
// }
