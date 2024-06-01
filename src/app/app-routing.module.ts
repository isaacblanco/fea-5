import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleBigCardComponent } from './components/articles/article-big-card/article-big-card.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'article-detail', component: ArticleBigCardComponent },
  { path: '**', component: ArticleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
