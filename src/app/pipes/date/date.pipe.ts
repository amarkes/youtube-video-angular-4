import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'date'
})
export class AppDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('pt-BR');
    return datePipe.transform(value, args);
  }

}
