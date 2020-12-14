import {Pipe, PipeTransform } from '@angular/core';
import Attributes from '../classes/attributes.class';
import Weapon from '../classes/weapons.class';

@Pipe({
  name: 'ataque'
})
export class AtaquePipe implements PipeTransform {

  transform(value: number, weapons: Weapon[]): number {

    const equippedWeapon = weapons.find(w => w.equipped);
    const modWeapon = equippedWeapon ? equippedWeapon.mod : 0;
    return 10 + value + modWeapon;
  }

}
