import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { CepService } from '../../services/cep/cep.service';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ],
  providers: [CepService]
})
export class HomeModule { }
