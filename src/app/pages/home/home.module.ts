import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { CepService } from '../../services/cep/cep.service';
import { CepModule } from '../../directives/cep/cep.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateModule } from '../../pipes/date/date.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    CepModule,
    ReactiveFormsModule,
    DateModule
  ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ],
  providers: [CepService]
})
export class HomeModule { }
