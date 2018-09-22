import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { AuthGuardService } from './../services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { MyAppErrorHandlerService } from '../services/my-app-error-handler.service';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', canActivate: [AuthGuardService], component: AboutComponent },
  { path: 'notLoggedIn', component: NotLoggedInComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotLoggedInComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'myApplication'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features


  ],
  providers: [AuthGuardService, 
              AuthService, 
              UserService, 
              MyAppErrorHandlerService
              
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
