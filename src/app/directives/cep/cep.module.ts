import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepDirective } from './cep.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CepDirective],
  declarations: [CepDirective]
})
export class CepModule { }
