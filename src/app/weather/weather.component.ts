import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  lat;
  lon;
  weather;
  isMobile;
  constructor(private weatherService: WeatherService, private utility: UtilityService) {
   }

  ngOnInit() {
    this.isMobile = this.utility.GetMediaQuery();
    this.getLocation();
  }

  getLocation() {
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition((success)=> {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=> {
          this.weather = data;
        })
      })
    }
  }

}
