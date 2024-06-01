import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
  ],
})
export class SharedModule {}
