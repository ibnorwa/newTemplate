import { Injectable, ErrorHandler } from '@angular/core';
//import {ToastsManager, Toast, ToastOptions} from "ng2-toastr";
import {Router} from "@angular/router";
import {UNAUTHORIZED, BAD_REQUEST, FORBIDDEN} from  'http-status-codes';

@Injectable()

export class MyAppErrorHandlerService implements ErrorHandler {

  // static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  // static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";



  constructor(private router: Router) { }


  public handleError(error) {
    console.error(error);
    let httpErrorCode = error.code;
    switch(httpErrorCode){
      case 'auth/invalid-email':
      {
        // do something when user is unauthorized. 
        console.log('this is not allowed. you enter invalid email ya 7omar');
      }
      
      case 'user exist':
      {
        //do something when user exist 
      }

      case 'user is locked':
      {
        //do something when user is locked 
      }

    }

    
  }







}

  // public handleError(error: any) {
  //   console.error(error);
  //   let httpErrorCode = error.httpErrorCode;
  //   switch (httpErrorCode) {
  //     case UNAUTHORIZED:
  //         this.router.navigateByUrl("/login");
  //         break;
  //     case FORBIDDEN:
  //         this.router.navigateByUrl("/notLoggedIn");
  //         break;
  //     case BAD_REQUEST:
  //        this.showError(error.message);
  //         break;
  //     default:
  //        this.showError(MyAppErrorHandlerService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
  //   }
  // }






