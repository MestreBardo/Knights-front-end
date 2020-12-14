import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class IdadePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
  let hoje = new Date;
  let nascimento = new Date(value)  
  var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();  
  if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <  
      new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) {
    diferencaAnos--; 
  }
  return diferencaAnos
  }

}
