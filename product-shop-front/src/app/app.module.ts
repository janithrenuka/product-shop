import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { DialogModule } from "primeng/dialog";
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DockModule} from 'primeng/dock';
import { ChipModule } from 'primeng/chip';
import {InputTextModule} from 'primeng/inputtext';
import { FilterPipe } from 'src/pipes/filter.pipe';
import {ScrollTopModule} from 'primeng/scrolltop';
import {PasswordModule} from 'primeng/password';
import {SidebarModule} from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneComponent } from './components/phone/phone.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MensWearComponent } from './components/wears/mens-wear/mens-wear.component';
import { WomensWearComponent } from './components/wears/womens-wear/womens-wear.component';
import { KidsWearComponent } from './components/wears/kids-wear/kids-wear.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    HomeComponent,
    FilterPipe,
    PhoneComponent,
    LoginComponent,
    SignupComponent,
    MensWearComponent,
    WomensWearComponent,
    KidsWearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TabMenuModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    BreadcrumbModule,
    DialogModule,
    MenubarModule,
    BrowserAnimationsModule,
    DockModule,
    ChipModule,
    InputTextModule,
    ScrollTopModule,
    PasswordModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
