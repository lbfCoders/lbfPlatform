import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.auth.onAuthStateChanged(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
   }

   onSubmit(formData) {
     if(formData.valid) {
       console.log(formData.value);
       this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
         (success) => {
           console.log(success);
           this.router.navigate(['/members'])
         }).catch(
         (err) => {
           console.log(err);
           this.error = err;
         })
     }
   }

  ngOnInit() {
  }

}
