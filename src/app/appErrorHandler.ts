import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


export class AppErrorHandler implements ErrorHandler {
    errorAlert ='';

    handleError(error){
        let httpErrorCode = error.code;
        switch(httpErrorCode){

            case('auth/invalid-email'):
            {
            console.log('put a valid email ya 7omar');
            

            this.errorAlert = error.message;
            
            return httpErrorCode;
            }
            case('auth/disabled user'):
            console.log('You are blocked')
        }
        
        
        //console.log(httpErrorCode);
    }
    
}