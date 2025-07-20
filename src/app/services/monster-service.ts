import { Injectable } from '@angular/core';
import { Monster } from '../interface/monster';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* Logica de monstruos seleccionados
  arreglo de monstruos
  get monstruos para monster-select
  add de elementos
  patron observer
  uso de behaviorSubject
*/
export class MonsterService {

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
  }];

  private _selected: Monster[] = [];    //inicio en vacio con "_" por convencion
  private _itemsSubject: BehaviorSubject<Monster[]> = new BehaviorSubject(this._selected);   //hago observable la variable
  public items: Observable<Monster[]> = this._itemsSubject.asObservable();

  constructor(){}

  addElement(monster : Monster):void{
    let aux = this._selected.find((v1) => v1.id == monster.id); /* funcion flecha para verificar si el elemento que envio ya esta en el carrito */
     if(!aux){  
        this._selected.push({... monster});          /* de no existir creo un "clon" o copia del elemento con notacion funcional*/
     }else{
        aux.quantity += monster.quantity;     /*de existir el monstruo le sumo a la cantidad seleccionada deseada */
     }
     this._itemsSubject.next(this._selected);         //emitimos el cambio del patron observer con .next() equivalente a .emit() en @output
  }
  
  getMonsters(): Monster[] {
    return this.monsters;
  }
}
