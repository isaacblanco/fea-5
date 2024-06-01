import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ArticleCardComponent implements OnInit {
  article: Article | undefined;
  showAll: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const url = params['url'];
      if (url) {
        this.articlesService.getArticleByUrl(url).subscribe((article) => {
          if (article) {
            this.article = article;
          } else {
            console.error('Article not found');
            this.router.navigateByUrl('/');
          }
        });
      } else {
        console.error('URL is null or undefined');
        this.router.navigateByUrl('/');
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/']); // Navegar a la página del listado
  }
}
