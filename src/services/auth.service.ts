export class AuthService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
  constructor() { }

  login() {
    this.loggedIn = true;
  }

  loggedout() {
    this.loggedIn = false;
  }
}
