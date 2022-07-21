import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },



  {
    path: "account", loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule)
  },
  {
    path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
  {
    path: "practice", loadChildren: () => import('./practice/practice.module')
      .then(mod => mod.PracticeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


