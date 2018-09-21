import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userAuth:UserService){}
  title = 'newTemaplate';
  user=this.userAuth.afAuth.user;

  _logout(){
    this.userAuth.logout();
  }
}
