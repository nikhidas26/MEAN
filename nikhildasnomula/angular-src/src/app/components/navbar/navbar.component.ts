import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarIn = false;

  toggleState() {
    console.log("toggle state");
    this.isNavbarIn = !this.isNavbarIn;
  }


  constructor() { }

  ngOnInit() {
  }

}
