import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
 { path: 'create' , component : AddUsersComponent},
 
 
  
  { path: 'list' , 
    children:[
      {path : '' , component : ListUsersComponent},
      { path: 'edit/:id' , component : EditUsersComponent},
      { path: 'view/:id' , component : ViewUsersComponent}
    ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
