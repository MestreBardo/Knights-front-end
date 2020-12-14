import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experiencia'
})
export class ExperienciaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if (value > 7) {
      return Math.floor((value - 7) * Math.pow(22, 1.45))
    }
    return 0;
  }

}
