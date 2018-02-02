import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.auth.onAuthStateChanged(auth => {
      if(auth) {
        this.name = auth;
        // control login links here
      }
    });
   }

   logout() {
     this.af.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
   }

  ngOnInit() {
  }

}
