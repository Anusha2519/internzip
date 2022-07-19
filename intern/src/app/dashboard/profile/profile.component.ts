import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})
export class ProfileComponent implements OnInit {

  value = 'btn'
  profileform = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15)]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    lastName: new FormControl('', [

    ]),
    mobileNumber: new FormControl('', [

    ]),
    pincodeAddress: new FormControl('', [

    ]),

  });

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileform.value);
    this.profileform.markAllAsTouched()
    if (this.profileform.valid) {
      this.messageService.add({
        severity: 'success', summary: 'Success', detail: 'Submitted',
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'please fill the required fields' });
    }
  }

}


