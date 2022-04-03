import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; 

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    return position.coords;
  }
}
