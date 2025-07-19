import { Component } from '@angular/core';
import {Monster} from '../interface/monster'
import { MonsterService } from '../monster-service';

@Component({
  selector: 'app-summon-list',
  standalone: false,
  templateUrl: './summon-list.html',
  styleUrl: './summon-list.scss'
})

export class SummonList {
 monsters : Monster []= [{
    id: 0,
    name: "slime",
    qa: "normal",
    skill: "Ataque critico",
    cost: 1,
    stock: 3,
    buff: 0,
    quantity:0
  }, 
  { 
    id: 1,
    name: 'clive',
    qa: "normal",
    skill: "ataque critico",
    cost: 1,
    stock: 0,
    buff: 20,
    quantity:0
  },
   { 
    id: 2,
    name: 'pochita',
    qa: "normal",
    skill: "morder 20% sangrado",
    cost: 2,
    stock: 9,
    buff: 100,
    quantity:0
  }
  ];

  constructor(private mservice: MonsterService){ 
    /* private service funciona como atributo y al mismo tiempo como singleton y si falta el servicio lo crea en el moment*/
  }

  title: String = "Invocaciones Disponibles";

  addToSelect(monster: Monster){
      this.mservice.addElement(monster);         /*aca utilizo este atributo instanciado como parametro del constructor*/
      monster.stock-= monster.quantity;
      monster.quantity = 0;
  }

}
