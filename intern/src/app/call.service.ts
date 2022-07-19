import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CallService {
  url = "https://jsonplaceholder.typicode.com/users "

  constructor(private http:HttpClient) { }
  call()
  {
    return this.http.get(this.url);
  }
}
