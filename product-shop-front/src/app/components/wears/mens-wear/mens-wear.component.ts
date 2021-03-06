import { Component, OnInit } from '@angular/core';
import { wear } from 'src/app/model/wears';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.css']
})
export class MensWearComponent implements OnInit {

  searchPhone = '';
  menWears: wear[] = [
    {
      'Id': 1,
      'Name': 'Black Office Trouser',
      'Price': 1200,
      'Type': 1,
      'Size': '38',
      'Available': true,
      'Img': '../../../../assets/images/black_trouser.jfif',
      'Info': 'Lorem Ipsum'
    },
    {
      'Id': 2,
      'Name': 'Off White Office Shirt',
      'Price': 1500,
      'Type': 1,
      'Size': '16',
      'Available': true,
      'Img': '../../../../assets/images/off_white_shirt.webp',
      'Info': 'Lorem Ipsum'
    },
    {
      'Id': 3,
      'Name': 'Polka Dot  T-Shirt',
      'Price': 900,
      'Type': 1,
      'Size': '17',
      'Available': true,
      'Img': '../../../../assets/images/polka_dot_tshirt.jfif',
      'Info': 'Lorem Ipsum'
    },
  ]

  displayBasic: boolean = false;

  showBasicDialog() {
        this.displayBasic = true;
        console.log('open');
        console.log(this.displayBasic);
        
  }


  constructor() { }

  ngOnInit(): void {
  }

}
