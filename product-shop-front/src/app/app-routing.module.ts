import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PhoneComponent } from './components/phone/phone.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MensWearComponent } from './components/wears/mens-wear/mens-wear.component';
import { WomensWearComponent } from './components/wears/womens-wear/womens-wear.component';
import { KidsWearComponent } from './components/wears/kids-wear/kids-wear.component';

const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'app-login', component: LoginComponent},
    { path: 'app-signup', component: SignupComponent},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-about', component: AboutComponent},
    { path: 'app-phone', component: PhoneComponent},
    { path: 'app-mens-wear', component: MensWearComponent},
    { path: 'app-womens-wear', component: WomensWearComponent},
    { path: 'app-kids-wear', component: KidsWearComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }