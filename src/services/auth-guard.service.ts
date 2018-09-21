import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private auth: UserService, private authService: AuthService, private router: Router) { }

  canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('herooo', this.auth.loggedIn)
    if (this.auth.loggedIn) {
      return this.auth.loggedIn;
    } else {
      this.auth.redirectURL = state.url;
      this.router.navigate(['/notLoggedIn']);
      return this.auth.loggedIn;
    }
    // return  this.auth.afAuth.auth.onAuthStateChanged(user => {
    //     if (user) {
    //       console.log('here is true');
    //       return true;

    //     } else {
    //       console.log('here is false');
    //       return false; }

    //   });

    // return this.auth.afAuth.auth.map(authState=>{
    //   if(authState.auth.emailVerfied)
    //   this.router.navigate(['notLoggedIn']);
    //   return !authState;
    // }).take(1);
  }
}
