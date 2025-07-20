import { Component } from '@angular/core';
import {Monster} from '../interface/monster'
import { MonsterService } from '../services/monster-service';

@Component({
  selector: 'app-summon-list',
  standalone: false,
  templateUrl: './summon-list.html',
  styleUrl: './summon-list.scss'
})

export class SummonList {
  monsters: Monster[] = [];

  constructor(private mservice: MonsterService){ 
    /* private service funciona como atributo y al mismo tiempo como singleton y si falta el servicio lo crea en el moment*/
  }

  title: String = "Invocaciones Disponibles";

  addToSelect(monster: Monster){
      this.mservice.addElement(monster);         /*aca utilizo este atributo instanciado como parametro del constructor*/
      monster.stock-= monster.quantity;
      monster.quantity = 0;
  }
  ngOnInit(){
    this.monsters = this.mservice.getMonsters();
  }
}
