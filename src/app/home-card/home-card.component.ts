import { Component, OnInit, EventEmitter } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-home-card',
  inputs: ['cardName'],
  outputs: ['cardEvent'],
  directives: [MD_CARD_DIRECTIVES],
  templateUrl: 'home-card.component.html',
  styleUrls: ['home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  cardName:string;
  cardEvent: EventEmitter<string>;
  private clicks:number = 0;
  constructor() {
    this.cardEvent = new EventEmitter();
   }

  ngOnInit() {
  }

  cardClicked() {
    this.clicks += 1;
    this.cardEvent.emit(`Card clicked ${this.clicks} times`);
  }

}
