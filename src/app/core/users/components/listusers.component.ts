import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/userservice.service';
import { User } from '../model/usermodel';
import { Observable, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  first_name: string = "";
  last_name: string = "";
  
  constructor(private userService: UserService) { }

  private listUsers: Observable<User[]>;
  private isLoaded: boolean;

  ngOnInit() {
    this.getListUsers();
  }
  getListUsers(): void {
    this.isLoaded = false;
    this.listUsers = this.userService.getListUsers().pipe(finalize(() => this.isLoaded = true));
    //this.isLoaded = true;
  }
  onAdd(firstname:string, lastname:string) {
    const user = new User();
    user.first_name = firstname;
    user.last_name = lastname;
    this.userService.postUser(user);
    
  }
  onDelete(id) {
    this.userService.deleteUser(id)
  }
}
