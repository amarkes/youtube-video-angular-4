import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDatePipe } from './date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AppDatePipe],
  declarations: [AppDatePipe]
})
export class DateModule { }
