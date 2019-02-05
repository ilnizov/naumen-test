import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { IArticleInfo, IArticleInfoArray } from '../../articleInfo';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})

export class ArticlesListComponent implements OnInit, OnChanges {
  constructor(private articleService: ArticleService) {
  }

  @Input() articlesList;

  articleInfo: IArticleInfoArray;
  articlesTitles: string[];
  allArticlesLength: number[];
  averageLength = 0;

  static getUrlInfo(searchQuery: string) {
    return 'https://ru.wikipedia.org/w/api.php?action=query&titles='
      + searchQuery + '&prop=info&format=json&origin=*';
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.getArticlesTitle();
    this.getAllArticlesLength();
  }

  getArticlesTitle() {
    this.articlesTitles = this.articlesList[1];
  }

  getAllArticlesLength() {
    this.allArticlesLength = [];

    for (const title of this.articlesTitles) {
      this.articleService.getArticlesInfo(ArticlesListComponent.getUrlInfo(title))
        .subscribe(
          (data: IArticleInfo) => {
            this.articleInfo = {
              ...data,
              query: {
                pages: [Object.values(data.query.pages)[0]]
              }
            };
            this.allArticlesLength.push(this.articleInfo.query.pages[0].length);
            this.getAverageLength();
          }
        );
    }
  }

  getAverageLength() {
    let sum = 0;
    for (const length of this.allArticlesLength) {
      sum += length;
    }

    this.averageLength = Math.round(sum / this.allArticlesLength.length);
  }
}
