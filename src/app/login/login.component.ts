import { Observable } from 'rxjs';
import { AppErrorHandler } from './../appErrorHandler';
import { UserService } from './../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule, Output, EventEmitter, ErrorHandler } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() event = new EventEmitter<boolean>();
  constructor(private auth: UserService, private _errorAlert: AppErrorHandler) { }
  email = '';
  password = '';
  reg = false;
  errorAlert = new Observable();


  login() {
    console.log(this.errorAlert);
    this.auth.login(this.email, this.password);
    this.event.emit(false);
    console.log(this.errorAlert);
  }

  logout() {
    this.auth.logout();

    
  }
  register() {

    this.auth.register(this.email, this.password);
  }


  loginWithGmail(){

    
  }

  newRegister(){

    this.auth.newRegister(this.email, this.password);
  }
  ngOnInit() {
  }

  // newRegister() {

  //   this.auth.register(this.email, this.password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     return error.message; 
  //   });

  // }
 

}
