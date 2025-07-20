import { Component} from '@angular/core';
import { MonsterService } from '../services/monster-service';
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

  ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }
}
