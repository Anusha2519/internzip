import { Component, OnInit } from '@angular/core';
import { CallService } from 'src/app/call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  call: any;

  constructor(private callData: CallService) {

    callData.call().subscribe((data) => {
      console.warn("data", data);
      this.call = data
    });


    // console.warn(this.call)
  }

  ngOnInit(): void {
  }
  getcallFormData(data: any) {
    console.warn(data)
  } 

}

