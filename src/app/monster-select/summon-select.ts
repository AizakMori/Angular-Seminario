import { Component} from '@angular/core';
import { MonsterService } from '../monster-service';
import { Monster } from '../interface/monster';

@Component({
  selector: 'app-summon-select',
  standalone: false,
  templateUrl: './summon-select.html',
  styleUrl: './summon-select.scss'
})
/* suscribirse al patron observer */
export class SummonSelect {
  selected: Monster[] = [];
  constructor(private mservice: MonsterService){
    /*se da a entender que este mservice y el de summon-list es el mismo*/
    //traemos los valores?
    mservice._itemsSubject.subscribe((observable)=> this.selected = observable); 
  }
  removeElement(monster: Monster) {
    console.log(this.selected);
    this.mservice.removeElement(monster);
  }
}
