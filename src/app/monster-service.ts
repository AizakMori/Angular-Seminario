import { Injectable } from '@angular/core';
import { Monster } from './interface/monster';

@Injectable({
  providedIn: 'root'
})

/* Logica de monstruos seleccionados
*
*
*/
export class MonsterService {
  selected: Monster[] = [];    /*inicio en vacio*/
  constructor(){}

  addElement(monster : Monster):void{
    let aux = this.selected.find((v1) => v1.id == monster.id); /* funcion flecha para verificar si el elemento que envio ya esta en el carrito */
     if(!aux){  
        this.selected.push({... monster});          /* de no existir creo un "clon" o copia del elemento con notacion funcional*/
     }else{
        aux.quantity += monster.quantity;     /*de existir el monstruo le sumo a la cantidad seleccionada deseada */
     }
     console.log(this.selected);
  }
  removeElement(monster: Monster):void{
    
  }
}
