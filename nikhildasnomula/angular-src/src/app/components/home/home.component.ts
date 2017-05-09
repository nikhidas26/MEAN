import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profilePicPath: string;

  constructor() { }

  ngOnInit() {
    this.getMyPicture();
  }

  getMyPicture(){
   this.profilePicPath = "../../../src/assets/images/nikhil.png";
 }

}
