import { Pipe, PipeTransform } from '@angular/core';
import Attributes from '../classes/attributes.class';

@Pipe({
  name: 'modificadores'
})
export class ModificadoresPipe implements PipeTransform {

  transform(value: string, attribute: any): number {
    let valor = attribute[value];
    if (valor >= 0 && valor <= 8) {
      return -2
    }
    if (valor >= 9 && valor <= 10) {
      return -1
    }
    if (valor >= 11 && valor <= 12) {
      return 0
    }
    if (valor >= 13 && valor <= 15) {
      return 1
    }
    if (valor >= 16 && valor <= 18) {
      return 2
    }
    if (valor >= 19 && valor <= 20) {
      return 3
    } else {
      return 3
    }
  }

}
