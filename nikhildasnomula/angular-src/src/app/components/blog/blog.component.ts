import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // 'bank' is the name of the route parameter
    this.title = this.route.snapshot.params['title'];

    console.log("Title: " + this.title);
  }

}
