import { Component, Input, output } from '@angular/core';
import { MonsterService } from '../monster-service';
import { Monster } from '../interface/monster';

@Component({
  selector: 'app-summon-select',
  standalone: false,
  templateUrl: './summon-select.html',
  styleUrl: './summon-select.scss'
})
export class SummonSelect {
  constructor(private mservice: MonsterService){
    /*se da a entender que este mservice y el de summon-list es el mismo*/
  }
  removeElement(monster: Monster) {
    this.mservice.removeElement(monster);
  }
}
