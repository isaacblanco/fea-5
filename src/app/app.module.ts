import { NgModule, isDevMode } from '@angular/core';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared modules
import { ServiceWorkerModule } from '@angular/service-worker'; // Importar SharedModule
import { SharedModule } from './components/shared/shared.module';

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
    MatExpansionModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
