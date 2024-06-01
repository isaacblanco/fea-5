import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/article.interface';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Output() articleClicked = new EventEmitter<Article>();

  onCardClick(): void {
    this.articleClicked.emit(this.article);
  }
}
