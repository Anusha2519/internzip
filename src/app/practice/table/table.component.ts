import { Component, OnInit,Input } from '@angular/core';
import { UsersService } from '../users.service';
import { users } from './users';
// import { userSchema } from './usersSchema';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

@Input() hero: any;

  user: users[]=[];
  // schema: userSchema[]=[];

  constructor(private service:UsersService) { }
  delete(row:number){
    console.log(row);
    this.user.splice(row,1);
 }

  ngOnInit(): void {
    this.service.getAllusers().subscribe(items=> this.user=items)
//     this.service.getAllusers().subscribe(items=> {
// if(items.length>0){
//   Object.keys(items[0]).forEach(key=>{
//     this.schema.push({header:key, field:key});
//   });
// }
// this.user=items
//     });
    
  }

}
