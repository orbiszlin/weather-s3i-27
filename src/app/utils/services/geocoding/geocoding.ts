import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Service()
export class Geocoding {
  private http = inject(HttpClient);

  public geocode(query: string) {
    const url = `${environment.baseUrl}/geo/1.0/direct?q=${query}&limit=5&appid=${environment.apiKey}`;

    return this.http.get<any[]>(url);
  }

}
