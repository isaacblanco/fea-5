import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  modeTable: boolean = true;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articlesService.getAllArticles().subscribe((articles) => {
      console.log('Articulos: ');
      console.table(articles);
      this.articles = articles;
    });
  }

  goToDetail(article: Article): void {
    this.router.navigate(['/article-detail'], {
      queryParams: { url: article.url },
    });
  }
}
