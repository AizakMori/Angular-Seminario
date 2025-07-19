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
    name: "Slimey",
    quality: "Comun",
    skill: "Ataque critico",
    cost: 1,
    stock: 3,
    quantity:0,
  }, 
  { 
    id: 1,
    name: 'Slimey evo',
    quality: "Comun",
    skill: "ataque critico",
    cost: 1,
    stock: 1,
    quantity:0,
  },
   { 
    id: 2,
    name: 'Mocha',
    quality: "Raro",
    skill: "morder 20%",
    cost: 2,
    stock: 5,
    quantity:0,
  },
  { 
    id: 3,
    name: 'Mocha evo',
    quality: "raro",
    skill: "morder 50%",
    cost: 4,
    stock: 2,
    quantity:0,
  },
  { 
    id: 4,
    name: 'Devon',
    quality: "Epico",
    skill: "Stun",
    cost: 4,
    stock: 2,
    quantity:0,
  },
  { 
    id: 5,
    name: 'Devonette',
    quality: "epico",
    skill: "Stun",
    cost: 8,
    stock: 1,
    quantity:0,
  },
  { 
    id: 6,
    name: 'puffy',
    quality: "Legendario",
    skill: "Rayo laser",
    cost: 4,
    stock: 1,
    quantity:0,
  },
  { 
    id: 7,
    name: 'puffysaurus',
    quality: "Legendario",
    skill: "Rayo laser",
    cost: 8,
    stock: 1,
    quantity:0,
  },
  { 
    id: 8,
    name: 'Hellhound',
    quality: "Especial",
    skill: "fuego en area",
    cost: 8,
    stock: 2,
    quantity:0,
  },
  { 
    id: 9,
    name: 'Hellhound evo',
    quality: "Especial",
    skill: "fuego en area",
    cost: 8,
    stock: 2,
    quantity:0,
  },
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
