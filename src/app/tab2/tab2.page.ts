import {Component, inject, OnInit} from '@angular/core';
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
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, AsyncPipe]
})
export class Tab2Page implements OnInit {

  private weatherService = inject(Weather)

  /**
   * @deprecated
   * @protected
   */
  protected place$ = this.weatherService.getWeather$(50.087999, 14.420999)

  protected places$: Observable<Place>[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const geoPoints = [
      {lat: 50.08, lon: 14.42},
      {lat: 12.08, lon: 30.42},
      {lat: 20.08, lon: -30.42},
    ]

    geoPoints.forEach(point => {
      this.places$.push(this.weatherService.getWeather$(point.lat, point.lon))
    })
  }
}
