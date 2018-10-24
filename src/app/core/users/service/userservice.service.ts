import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/usermodel';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { urlUser } from '../../config'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isIdentifier = false;

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  getListUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(urlUser);
  }

  searchUser(firstname: string, lastname: string) {
    console.log(firstname)

    const service = this;
    const param = firstname ? 
    {
      params : new HttpParams().set('first_name', firstname).set('last_name', lastname)
    } : {} ;
    
    const obs = this.httpClient.get<User[]>(urlUser, param).subscribe((data) =>
    {
      if (data.length === 1) service.isIdentifier = true;
  
      else
        service.isIdentifier = false;
      this.router.navigate(['/users'])
    },
    error => service.isIdentifier = false
    );
  }
  canActivate(): boolean {
    return this.isIdentifier;
  }
  putUser(user: User) {
    const url = `${urlUser}/${user.id}`;
    this.httpClient.put(url,
      user)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }
  postUser(user: User) {
    this.httpClient.post(urlUser,
      user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  ///${id}
  deleteUser(id: number): void {
    const url = `${urlUser}/${id}`;
    this.httpClient.delete(url)
      .subscribe(error => {
        console.log("Rrror", error);
      }
      );
  }

}
