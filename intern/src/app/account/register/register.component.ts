import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {

  value = 'btn'
  registerform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,

    ]),

    control: new FormControl('', [
      Validators.required,

    ])

  });

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerform.value);
    this.registerform.markAllAsTouched()
    if (this.registerform.valid) {
      this.messageService.add({
        severity: 'success', summary: 'Success', detail: 'Submitted',
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'please fill the required fields' });
    }
  }

}

