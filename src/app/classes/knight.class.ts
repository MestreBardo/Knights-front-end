import { Attribute } from "@angular/core";
import Attributes from "./attributes.class";
import Weapon from "./weapons.class";

export default class Knight {
    _id: string | undefined;
    name: string = "";
    nickname: string = "";
    birthday: Date = new Date();
    weapons: Weapon[] = []
    attributes: Attributes = new Attributes()
    keyAttribute: string = "strength";
    hallOfHeroes: boolean = false;    
}