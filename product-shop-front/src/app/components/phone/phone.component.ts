import { Component, OnInit } from '@angular/core';
import { phone } from 'src/app/model/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  searchPhone = '';
  phones: phone[] = [
    {
      'Id': 1,
      'Name': 'Nokia X6',
      'Price': 'Rs.45000',
      'Available': true,
      'Img': '../../../assets/images/nokia_x6.jpg',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 2,
      'Name': 'Samsung S9+',
      'Price': 'Rs.148000',
      'Available': false,
      'Img': '../../../assets/images/samsung_s9.jfif',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 3,
      'Name': 'Apple 11',
      'Price': 'Rs.250000',
      'Available': true,
      'Img': '../../../assets/images/apple_11.jfif',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 4,
      'Name': 'Google Pixel 3+',
      'Price': 'Rs.176000',
      'Available': true,
      'Img': '../../../assets/images/pixel_3.webp',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 5,
      'Name': 'Xiomi P+',
      'Price': 'Rs.75000',
      'Available': false,
      'Img': '../../../assets/images/xiomi.jfif',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 6,
      'Name': 'Xiomi P+',
      'Price': 'Rs.75000',
      'Available': false,
      'Img': '../../../assets/images/xiomi.jfif',
      'Info': 'Lorem Ipsum',
    },
    {
      'Id': 7,
      'Name': 'Xiomi P+',
      'Price': 'Rs.75000',
      'Available': false,
      'Img': '../../../assets/images/xiomi.jfif',
      'Info': 'Lorem Ipsum',
    },
    
  ];

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
