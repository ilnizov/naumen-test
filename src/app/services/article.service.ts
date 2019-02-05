import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IArticle } from '../article';
import { IArticleInfo } from '../articleInfo';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticles(url) {
    return this.http.get<IArticle>(url);
  }

  getArticlesInfo(url) {
    return this.http.get<IArticleInfo>(url);
  }
}
