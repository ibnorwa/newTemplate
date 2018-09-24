import { MyAppErrorHandlerService } from './my-app-error-handler.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, ErrorHandler } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  errorLog: Error;
  error: Error;
  redirectURL: string;
  loggedIn = false;
  
  constructor(public afAuth: AngularFireAuth, router: Router) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('here is true');
        this.loggedIn = true;
        if (this.redirectURL) {
          router.navigate([this.redirectURL]);
        }
        return true;

      } else {
        console.log('here is false');
        this.loggedIn = false;
        return false;
      }

    });

  }

  login(email: string, password: string) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("successful login");
      return true;
    }).catch(function (error) {
      throw(error);
      //console.log(error);
      
    });
  }
  logout() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
    console.log(this.loggedIn);


    // this piece of code came from https://firebase.google.com/docs/auth/web/password-auth
    // Authenticate with Firebase using Password-Based Accounts using Javascript
    this.afAuth.auth.signOut().then(function () {

      console.log('Log Out successful')
    }).catch(function (error) {
      console.log(error);
      this.break;
    });

  }

  register(email: string, password: string) {

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(()=>{console.log('successful register')}).catch(function(error){

      throw(error);
    });

  }

  newRegister(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //this.errorLog = error;
      console.log(errorCode, errorMessage)
      // ...
    });

  }

  isLoggedIn(): boolean {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('here is true');
        return true;

      } else {
        console.log('here is false');
        return false;
      }

    });
    setTimeout(() => this.loggedIn, 400);
    return this.loggedIn;
  }

  isSignedIn() {
    const prom = new Promise(
      (resolve, reject) => {
        resolve();
      }

    );
  }





}
