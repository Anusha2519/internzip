import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    control: new FormControl('', [
      Validators.required,

    ])

  });

  constructor(
    // private primengConfig: PrimeNGConfig, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginform.value);
    this.loginform.markAllAsTouched()
    if (this.loginform.valid) {
      this.messageService.add({
        severity: 'success', summary: 'Success', detail: 'Submitted',
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
  }
}