import { Component, OnInit } from '@angular/core';
// import { rxjs} from 'rxjs

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

category:string[];


  constructor() {
    this.category=[
      'berger',
      'desert',
      'soda',
      'pizza'

    ]
  }
  
  
  
  ngOnInit() {
  }
}
  
 