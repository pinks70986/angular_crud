import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  listUsers:any=[];

  constructor (private userservice:UserService){}
  ngOnInit()
  {
    this.userservice.listUsers().subscribe(res=>{
      this.listUsers=res;

    });
  }

}
