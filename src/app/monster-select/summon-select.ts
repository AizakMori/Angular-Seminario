import { Component} from '@angular/core';
import { MonsterService } from '../monster-service';
import { Monster } from '../interface/monster';
import { OnDestroy } from '@angular/core';        //estos dos imports para destruir la suscripcion
import { Subscription } from 'rxjs';          

@Component({
  selector: 'app-summon-select',
  standalone: false,
  templateUrl: './summon-select.html',
  styleUrl: './summon-select.scss'
})
/* suscribirse al patron observer */
export class SummonSelect implements OnDestroy{
  selected: Monster[] = [];
  private subscription!: Subscription;      //agregados extra que tuve que buscar para no tener problemas con la memoria

  constructor(private mservice: MonsterService){
    /*se da a entender que este mservice y el de summon-list es el mismo*/
    //traemos los valores de la variable public items y traemos los valores con la funcion flecha
    this.subscription = mservice.items.subscribe((observable)=> this.selected = observable); 
  }
  //concepto para remover los elementos del "carrito" si me da el tiempo lo termino
  removeElement(monster: Monster) {
    console.log(this.selected);
    this.mservice.removeElement(monster);
  }
  ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}
