import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent {
 userId:String='';
 userDetails:any;

  constructor (private userservice:UserService,private activatedRoute:ActivatedRoute){}
  ngOnInit():void
  {
    this.activatedRoute.params.subscribe(res=>
      {

        this.userId=res['id'];
      }
     
      )
      this.userservice.viewUser(this.userId.toString()).subscribe(res=>
        {
          this.userDetails=res;
        })
  }


}
