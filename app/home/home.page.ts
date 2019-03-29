import { Component } from '@angular/core';
import { hasParentInjector } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  picture:any[];
  
 

  constructor(private router : Router){
    this.picture = [
       '../assets/image/1.jpg',
       '../assets/image/2.jpg',
       '../assets/image/3.jpg',
       '../assets/image/6.jpg',
       '../assets/image/9.jpg',
       '../assets/image/10.jpg',
       '../assets/image/15.jpg',
       '../assets/image/14.jpg',
       '../assets/image/17.jpg',
       '../assets/image/8.jpg'
    ]
  }

}
