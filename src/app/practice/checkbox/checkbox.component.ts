import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
data={
  name: 'Anusha',
  email: 'anuanusha@gmail.com',
  phoneNumber:9876543210,
}

  isAccepted:string[] = [];
  isaccepted:boolean = false;

  selectedFruites:string[] = [];

  termsAndConditions(event:any) {
    console.log(event);
  }
  showSelectedFruits(event:any) {
    console.log(event);
  } 
  constructor() { }

  ngOnInit(): void {
  }

}

