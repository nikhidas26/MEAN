import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  title: String;

  constructor(private http: Http) { }

  getArticlesByTitle(title) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let articlesUrl = 'users/articles/' + title;
    return this.http.get(articlesUrl, {headers: headers}).
      map(res => {
         console.log(res);
         return res.json();
      });
  }

  getArticlesByCategory(category) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let articlesUrl = 'users/articles?category=' + category;
    return this.http.get(articlesUrl, {headers: headers}).
      map(res => {
         console.log(res);
         return res.json();
      });
  }

}
