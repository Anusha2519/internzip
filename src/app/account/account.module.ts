import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AccountRoutingModule } from './account-routing.module';

console.warn("account module")
@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountRoutingModule
  ],
  
})
export class AccountModule { }
