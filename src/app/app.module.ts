// Importing AngularFire Tool
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.route';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAZR2k-KQyYxK6_q0BoPwbDPE-FygCMLVI",
    authDomain: "lost-but-found.firebaseapp.com",
    databaseURL: "https://lost-but-found.firebaseio.com",
    projectId: "lost-but-found",
    storageBucket: "lost-but-found.appspot.com",
    messagingSenderId: "463702594964"
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    WelcomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routes,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

