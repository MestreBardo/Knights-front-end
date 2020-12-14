import { Component, Input, OnInit } from '@angular/core';
import Knight from '../classes/knight.class';
import { KnightsService } from '../services/knights.service';

@Component({
  selector: 'app-knight-card',
  templateUrl: './knight-card.component.html',
  styleUrls: ['./knight-card.component.scss']
})
export class KnightCardComponent implements OnInit {

  constructor() { }
  @Input() knight: Knight = new Knight();
  @Input() escolhidoId: string | null = null;

  ngOnInit(): void {
    console.log(this.knight);
  }



}
