import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent},
    { path: 'members', component: WelcomeComponent, canActivate: [AuthGuard]}

]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);