import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-home-card-annotations',
  directives: [MD_CARD_DIRECTIVES],
  styleUrls: ['home-card-annotations.component.css'],
  template: `
  <div class="app-content">
  <md-card (click)="cardClicked()">
    {{ cardName }}
  </md-card>
</div>`
})
export class HomeCardAnnotationsComponent implements OnInit {
  @Input() cardName: string;
  @Output() annotationCardEvent: EventEmitter<string>;
  private clicks: number = 0;
  constructor() {
    this.annotationCardEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  cardClicked() {
    this.clicks += 1;
    this.annotationCardEvent.emit(`Annotation Card clicked ${this.clicks} times`);
  }

}
