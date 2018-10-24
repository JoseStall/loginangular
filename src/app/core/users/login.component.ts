import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users/service/userservice.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ldapFNameCtrl: FormControl;
  public ldapLNameCtrl: FormControl;
  public loginForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.ldapFNameCtrl = this.fb.control('', Validators.required);
    this.ldapLNameCtrl = this.fb.control('', Validators.required);
    this.loginForm = this.fb.group({
      first_name: this.ldapFNameCtrl,
      last_name: this.ldapLNameCtrl
    }); 
  }
  login() {
    console.log(this.ldapFNameCtrl.value, this.ldapLNameCtrl.value)
    this.userService.searchUser(this.ldapFNameCtrl.value, this.ldapLNameCtrl.value)
  }
}

