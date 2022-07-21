import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from './table/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllusers():Observable<users[]> {
    return this.http.get<users[]>('https://jsonplaceholder.typicode.com/users/'); 
  } 
}
