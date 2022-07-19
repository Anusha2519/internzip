import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  list = [" Name", "EmailAddress", "PhoneNumber", "DateCreated", "PincodeAddress"];
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = tableData;
  }

}
export interface Product {
  Name?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  DateCreated?: string;
  PincodeAddress?: string;
}
const tableData = [
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001893",
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001894"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "12 Feb 2021",
    "PincodeAddress": "0001895"
  },
  {
    "Name": "James K",
    "EmailAddress": "jamesk123@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "22 Nov 2020",
    "PincodeAddress": "0001896"
  },
  {
    "Name": "Peter Hathway",
    "EmailAddress": "hathway@outlook.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001896"
  },
  {
    "Name": "Rose M",
    "EmailAddress": "Rose@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001898"
  },
  {
    "Name": "Thomas Peter",
    "EmailAddress": "peter123@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001899"
  },
  {
    "Name": "christin Jones",
    "EmailAddress": "jones223@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001900"
  },
  {
    "Name": "John Marshall",
    "EmailAddress": "johnmarshall@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001901"
  },
  {
    "Name": "Peter Hames",
    "EmailAddress": "jamesk123@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001896"
  },
]
