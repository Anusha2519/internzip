import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
// import { TableComponent } from './table/table.component';

const routes: Routes = [

  { path: 'checkbox', component: CheckboxComponent},
  // { path: 'table', component: TableComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
