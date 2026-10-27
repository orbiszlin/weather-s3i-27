import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Place} from "../models/place.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle]
})
export class Tab2Page {

  places: Place[] = [
    {
      id: "abc",
      title: "Praha",
      temperature: 0,
      description: "Mostly cloudy"
    }
  ];

  constructor() {}

}
