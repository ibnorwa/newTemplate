import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  errorLog: Error;
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
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

    const pr = this.afAuth.auth.signInWithEmailAndPassword(email, password);
    pr.catch(e => { console.log(e.message); this.errorLog = e; });
    this.loggedIn = true;
    console.log(this.loggedIn);
  }
  logout() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
    console.log(this.loggedIn);

  }

  register(email: string, password: string) {
    const pr = this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    pr.catch(e => { console.log(e.message); this.errorLog = e; });
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
