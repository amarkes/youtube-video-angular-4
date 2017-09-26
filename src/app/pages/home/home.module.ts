import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
