import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
 
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
   CommonModule,
   RouterModule,
   ReactiveFormsModule,
   MatInputModule,
   MatFormFieldModule,
   MatCardModule,
   MatSnackBarModule
   
  ],

  providers:[
    { provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue: {duration:2500}}
  ]
})
export class UsersModule { }
