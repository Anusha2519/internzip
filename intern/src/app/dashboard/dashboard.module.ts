import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users-list/users-list.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TableModule} from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { CallComponent } from './call/call.component';
import { HttpClientModule } from '@angular/common/http';
import {OverlayPanelModule} from 'primeng/overlaypanel';




console.warn("dashboard module loaded")

@NgModule({
  declarations: [
    SidebarComponent,
    DashboardGraphComponent,
    ProfileComponent,
    UsersListComponent,
    CallComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ChartModule,
    CalendarModule,
    AvatarModule,
    DividerModule,
    RouterModule,
    HttpClientModule,
    OverlayPanelModule,
    DashboardRoutingModule
  ]

})
export class DashboardModule { }
