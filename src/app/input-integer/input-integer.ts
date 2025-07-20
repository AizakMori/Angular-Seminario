import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  @Input() quantity! : number;
  @Input() max! : number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(){}
  
  upSelect(): void{
    console.log("hola")
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);  /*emitimos el cambio por @output para que lo reciban las bananas in box[()]*/
    }
  }
  downSelect():void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event: Event): void{
    this.quantityChange.emit(this.quantity);
  }
}
