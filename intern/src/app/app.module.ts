import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DashboardModule } from './dashboard/dashboard.module';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    AccountModule,
    DashboardModule,
    CardModule,
    ChartModule,
    CalendarModule,
    RouterModule,
    


  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
