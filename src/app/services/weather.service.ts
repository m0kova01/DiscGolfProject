import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'c1a865bb58e3499570b529d05bd2b266';
  
  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat, lon) {
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'imperial')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
}
