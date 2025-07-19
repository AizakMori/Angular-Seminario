import { Injectable } from '@angular/core';
import { Monster } from './interface/monster';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* Logica de monstruos seleccionados
  add de elementos
  patron observer
  uso de behaviorSubject
*/
export class MonsterService {
  private _selected: Monster[] = [];    //inicio en vacio con "_" por convencion
  _itemsSubject: BehaviorSubject<Monster[]> = new BehaviorSubject(this._selected);   //hago observable la variable
  public items: Observable<Monster[]> = this._itemsSubject.asObservable();
  selected: any;

  
  constructor(){}

  addElement(monster : Monster):void{
    let aux = this._selected.find((v1) => v1.id == monster.id); /* funcion flecha para verificar si el elemento que envio ya esta en el carrito */
     if(!aux){  
        this._selected.push({... monster});          /* de no existir creo un "clon" o copia del elemento con notacion funcional*/
     }else{
        aux.quantity += monster.quantity;     /*de existir el monstruo le sumo a la cantidad seleccionada deseada */
     }
     console.log(this._selected);
     this._itemsSubject.next(this._selected);         //emitimos el cambio del patron observer con .next() equivalente a .emit() en @output
  }
  removeElement(monster: Monster):void{

  }
}
