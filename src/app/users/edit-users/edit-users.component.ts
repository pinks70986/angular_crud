import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent {
  userId : any;
  userDetails : any;
  editUserForm:FormGroup = new FormGroup({});
  dataLoaded:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
              private userService:UserService,
              private formBuilder:FormBuilder,
              private _snackBar:MatSnackBar){}

  ngOnInit(){

    this.activatedRoute.params.subscribe(data =>{

      this.userId=data['id'];

      if (this.userId!== '')
      {
        this.userService.viewUser(this.userId)
        .toPromise()
        .then(data =>{
          this.userDetails = data;
          Object.assign(this.userDetails ,data)
          this.editUserForm = this.formBuilder.group({
            'name' : new FormControl(this.userDetails.data.first_name),
            'job'  :new FormControl(this.userDetails.data.email)
          })
          this.dataLoaded=true;
        })
        .catch( err=>{
          console.log(err);
        
       
      }
        )
      }


    })
   
  }
  updateUser()
  {
    this.userService.updateUser(this.userId,this.editUserForm.value).subscribe((data:any)=>
    {
      this._snackBar.open("User updated successfully");
    }
    ,(err:any)=>{
      this._snackBar.open("Error while updating user");
    }
    );
  }
}
