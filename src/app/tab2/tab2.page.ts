import {Component, inject} from '@angular/core';
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
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {Place} from "../models/place.model";
import {Weather} from "../utils/services/weather/weather";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, AsyncPipe]
})
export class Tab2Page {

  private weatherService = inject(Weather)

  protected place$ = this.weatherService.getWeather$(50.087999, 14.420999)

  constructor() {
  }
}
