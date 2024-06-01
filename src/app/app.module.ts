import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main pages
import { ArticleBigCardComponent } from './components/articles/article-big-card/article-big-card.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';

// Shared components
import { ArticleCardComponent } from './components/shared/article-card/article-card.component';
import { ArticleGridComponent } from './components/shared/article-grid/article-grid.component';

// Web
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { FormatDatePipe } from './pipes/date-format.pipe';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'; // Iconos
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared modules
import { SharedModule } from './components/shared/shared.module'; // Importar SharedModule

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleBigCardComponent,
    FormatDatePipe,
    ArticleCardComponent,
    ArticleGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
