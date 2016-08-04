import { Component } from '@angular/core';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeCardAnnotationsComponent } from './home-card-annotations/home-card-annotations.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdIcon,
    HomeCardComponent,
    HomeCardAnnotationsComponent
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'app works!';
  cardOutput: string;
  annotationCardOutput: string;

  cardOutputChanged($event) {
    this.cardOutput = $event;
  }

  annotationCardOutputChanged($event) {
    this.annotationCardOutput = $event;
  }
}
