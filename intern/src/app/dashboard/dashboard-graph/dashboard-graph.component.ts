import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
  providers: [MessageService],
})
export class DashboardGraphComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  products: Product[] = [];
  seeMore: boolean = true
  visible: boolean = false

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
    this.products = tableData.slice(0, 5);
  }

  oncardclick(i: number) {
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: '',
          data: [10 * i, 59 + i, 80 / i, 91 - i, 56 + i, 55 * i, 40 - i],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],  
    };
  }

onseemoreclick() {
  this.seeMore = !this.seeMore;
  if (!this.seeMore) {
    this.products = tableData.slice(0, 5);
  } else {
    this.products = tableData.slice(0, 3);

  }
}

}

export interface Product {
  name?: string;
  label?: string;
}

const tableData = [
  {
    Name: 'Charles Philip',
    label: 'CP',
    subheader: "18 October 2020"
  },
  {
    Name: 'U Christin',
    label: 'UC',
    subheader: "11 June 2020"

  },
  {
    Name: 'Robert Hillington',
    label: 'RH',
    subheader: "21 September 2020"

  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },

];


