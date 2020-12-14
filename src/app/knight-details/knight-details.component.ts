import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Knight from '../classes/knight.class';
import Weapon from '../classes/weapons.class';
import { KnightsService } from '../services/knights.service';

@Component({
  selector: 'app-knight-details',
  templateUrl: './knight-details.component.html',
  styleUrls: ['./knight-details.component.scss']
})
export class KnightDetailsComponent implements OnInit {

  @Input() knightId: string | null = null;
  @Output() createUpdateEvent = new EventEmitter<string>();
  knight: Knight = new Knight();
  birthday = '';
  actualNickname = '';
  constructor(private knightService: KnightsService, private toaster: ToastrService) { }

  ngOnInit(): void {
    if (this.knightId) {
      this.getKnightById();
    } else {
      this.birthday = this.knight.birthday.toISOString().split('T')[0];
    }
  }

  

  getKnightById() {
    this.knightService.getKnightById(this.knightId).subscribe(knight => {
      this.knight = knight;
      this.actualNickname = knight.nickname;
      this.birthday = this.knight.birthday.toString().split('T')[0];
    }, err => {
      this.toaster.error('Não foi possivel recuperar o Knight');
    })
  }

  addNewWeapon() {
    this.knight.weapons.push(new Weapon());
  }

  equipPrimary(index: number) {
    if(this.knight.weapons[index].equipped) {
      this.knight.weapons = this.knight.weapons.map(weapon => { return {...weapon, equipped: false}});
      this.knight.weapons[index].equipped = true;
    }

  }

  saveKnight() {
    if (this.knight.name === '' ) {
      return this.toaster.error('O seu knight precisa de um nome')
    }
    if (this.knight.weapons.find(w => w.name === '' || w.attr === '')) {
      return this.toaster.error('Uma ou mais armas estão incompletas')
    }
    if (!this.knight.weapons.find(w => w.equipped)) {
      return this.toaster.error('Você precisa de uma arma principal')
    }
    this.knight.birthday = new Date(this.birthday);
    this.knightService.saveKnight(this.knight).subscribe(() => {
      this.toaster.success('Knight salvo com sucesso');
      this.createUpdateEvent.emit('new');
    }, err => {
      this.toaster.error('Não foi possivel salvar o Knight');
    })
    return;
  }

  moveKnightToHall() {
    this.knightService.moveKnightToHall(this.knight._id).subscribe(() => {
      this.toaster.success('Knight movido com sucesso');
      this.createUpdateEvent.emit('heroes');
    }, err => {
      this.toaster.error('Não foi possivel mover o Knight');
    })
  }

  updateAknight() {
    this.knightService.updateAKnight(this.knight._id, this.knight.nickname).subscribe(knight => {
      this.toaster.success('Knight atualizado com sucesso')
      this.knight = knight;
      this.actualNickname = knight.nickname;
      this.birthday = this.knight.birthday.toString().split('T')[0];
    }, err => {
      this.toaster.error('Não foi possivel atualizar o Knight');
    })
  }

}
