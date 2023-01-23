import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUsersComponent } from '../users/list-users/list-users.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:String = " https://reqres.in/api/";
  constructor(private http:HttpClient) { 
  }
  listUsers()
    {
      return this.http.get(this.baseUrl+'users');
    }

    viewUser(id: String)
    {
      return this.http.get(this.baseUrl+'users/'+id);
    }

    addUser(userObj : any)
    {
      return this.http.post(this.baseUrl+'users',userObj);
    }

    updateUser(id:any,userObj : any)
    {
      return this.http.put(this.baseUrl+'users/'+id,userObj)
    }
}
