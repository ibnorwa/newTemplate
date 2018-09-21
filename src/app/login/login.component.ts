import { UserService } from './../../services/user.service';
import { FormsModule } from '@angular/forms';
import {Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output () event = new EventEmitter<boolean>();
  constructor(private auth:UserService) { }
  email = '';
  password = '';
  reg= false;
  login() {

    this.auth.login(this.email, this.password);
    this.event.emit(false);
  }

  logout(){
    this.auth.logout();
  }
  register() {

    this.auth.register(this.email, this.password);
  }
  ngOnInit() {
  }

}
