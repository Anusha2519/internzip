import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
  providers: [MessageService],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardGraphComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  products: Product[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.basicData = {
      labels: ['12:10 am', '', '', '', '', '', '', '', '', '', '', '11:59 pm'],
      datasets: [
        {
          label: 'First Dataset',
          data: [18, 0, 13, 30, 40, 35, 50, 30, 20, 10, 5, 10],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4,


        },

      ],
    };
this.products = tableData;
  }

  oncardclick(i: number) {
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65 * i, 59 + i, 80 / i, 91 - i, 56 + i, 55 * i, 40 - i],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],  
    };
  }
}

export interface Product {
  name?: string;
  label?: string;
}

const tableData = [
  {
    Name: 'Charles Philip',
    label: 'CP'
  },
  {
    Name: 'U Christin',
    label: 'UC'
  },
  {
    Name: 'Robert Hillington',
    label: 'RH'
  },
  // {
  //   Name: 'Robert C',
  //   label: 'RC'
  // },
];




