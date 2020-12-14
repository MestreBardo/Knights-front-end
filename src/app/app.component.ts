import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Knight from './classes/knight.class';
import { KnightsService } from './services/knights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Knights-front-end';
  filter = 'null';
  createOrUpdate = false;
  escolhidoId: string | null = null;

  constructor(private knightService: KnightsService, private toaster: ToastrService) { }

  knightsList: Knight[] = [];
  ngOnInit(): void {
    this.getKnightLists();
  }

  getKnightLists() {
    this.knightService.getKnightList(this.filter).subscribe( knights => {
      this.knightsList = [...knights]
    }, err => {
      this.toaster.error('Não foi possivel recupera a lista de Knight');
    })
  }
  addAKnight() {
    this.createOrUpdate = false;
    setTimeout(() => {
      this.escolhidoId = null;
      this.createOrUpdate = true;
    }, 300)
  }

  updateList(tipo: string) {
    this.createOrUpdate = false;
    if(tipo === 'new') {
      this.filter = 'null'
    } else {
      this.filter = 'heroes'
      this.escolhidoId = null;
    }
    this.getKnightLists()
  }

  chooseKnight(id: any) {
    if (this.escolhidoId !== id) {
      this.createOrUpdate = false;
      setTimeout(() => {
        this.escolhidoId = id;
        this.createOrUpdate = true;
      }, 300)
    }
    
    
  }

}
