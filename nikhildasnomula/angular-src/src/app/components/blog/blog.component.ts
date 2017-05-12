import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  routeCategory: String;
  title:string;
  text: string;
  subTitle: string;
  category: string;
  subCategory: string;
  modifiedDate: Date;
  createdDate: Date;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.routeCategory = params['category'];
        this.resetComponentState(); // based on new parameter this time
    });


  }

  resetComponentState() {
    // We get all the articles in this category and display the latest one
    this.articlesService.getArticlesByCategory(this.routeCategory).subscribe( data => {
      console.log(data);
      this.text = data[0].text;
      this.title = data[0].title;
      this.subTitle = data[0].sub_title;
      this.category = data[0].category;
      this.subCategory = data[0].sub_category;
      this.modifiedDate = data[0].modified_date;
      this.createdDate = data[0].created_date;
    });
    console.log("Category: " + this.category);
  }



}
