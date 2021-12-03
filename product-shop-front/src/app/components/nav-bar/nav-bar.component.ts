import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  display: any;

  items: MenuItem[] = [];

  ngOnInit() {

      this.items = [
        {
          label: '',
          routerLink: '/app-home',
        },
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: "/app-home",
        },
        {
          label: 'Phones',
          icon: 'pi pi-fw pi-mobile',
          items: [
            {
              label: 'Apple',
              icon: 'pi pi-fw pi-apple',
              routerLink: "/app-phone"
            },
            {
              label: 'Google',
              icon: 'pi pi-fw pi-google',
              routerLink: "/app-phone"
            },
            {
              label: 'Windows',
              icon: 'pi pi-fw pi-microsoft',
              routerLink: "/app-phone"
            },
            {
              label: 'Nokia',
              icon: 'pi pi-fw pi-apple',
              routerLink: "/app-phone"
            }
          ]
        },
        {
          label: 'Wears',
          icon: 'pi pi-fw pi-shopping-bag',
          //routerLink: "/app-wears",
          items: [
            {
              label: 'Men\'s',
              icon: 'pi pi-fw pi-',
              routerLink: '/app-mens-wear'
            },
            {
              label: 'Women\'s',
              icon: 'pi pi-fw pi-',
              routerLink: '/app-womens-wear'
            },
            {
              label: 'Kid\'s',
              icon: 'pi pi-fw pi-',
              routerLink: '/app-kids-wear'
            }
          ]
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-bars',
          routerLink: '/app-about'
        }
      ]
      // this.items = [
      //     {label: 'Shop', routerLink: "/app-home", icon: 'pi pi-prime' },
      //     {label: 'Phones', routerLink: "/app-phone", icon: 'pi pi-fw pi-tablet'},
      //     {label: 'Wears', routerLink: "/app-wears", icon: 'pi pi-fw pi-shopping-bag'},
      //     {label: 'About', routerLink: "/app-about", icon: 'pi pi-fw pi-bars'},
      // ];
  }

}
