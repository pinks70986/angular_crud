import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  addUserForm: FormGroup = new FormGroup({});
 
  constructor(private formBuilder :FormBuilder,
    private userService : UserService,
    private _snackBar : MatSnackBar
    ){}

  ngOnInit():void {
  this.addUserForm = this.formBuilder.group({
    'name' : new FormControl(''),
    'job' : new FormControl('')
  })}
  createUser()
    {
      this.userService.addUser(this.addUserForm.value).subscribe((data:any)=>
        {
          this._snackBar.open("User created successfully");
        }
        ,(err:any)=>{
          this._snackBar.open("Error while creating user");
        }
        );
    }
  

  


}
