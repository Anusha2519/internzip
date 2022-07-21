import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PracticeRoutingModule } from './practice-routing.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {CheckboxModule} from 'primeng/checkbox';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';


console.warn("practice module loaded")


@NgModule({
  declarations: [
    CheckboxComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    OverlayPanelModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
