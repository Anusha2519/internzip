import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class DashboardGraphComponent implements OnInit {
  basicData: any;




  basicOptions: any;



  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.basicData = {
      labels: ['12:10 am', '', '', '', '', '', '', '', '', '', '', '11:59 pm'],
      datasets: [
        {
          label: '.',
          data: [18, 0, 13, 30, 40, 35, 50, 30, 20, 10, 5, 10],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4,


        }

      ]
    };





  }



}
