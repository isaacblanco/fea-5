import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/article.interface';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css'],
})
export class ArticleGridComponent {
  @Input() articles: Article[] = [];
  @Output() rowClicked = new EventEmitter<Article>();
  displayedColumns: string[] = ['publishedAt', 'title', 'description'];

  onRowClick(article: Article): void {
    this.rowClicked.emit(article);
  }
}
