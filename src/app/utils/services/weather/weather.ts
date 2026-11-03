import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Place} from "../../../models/place.model";

@Service()
export class Weather {
  private http = inject(HttpClient);

  public getWeather$(lat: number, lon: number) {
    const url = `${environment.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}`;

    return this.http.get<Place>(url);
  }
}
