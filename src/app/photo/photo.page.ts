import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  ngOnInit() {
    this.photo = '../../assets/img/empty-image-png-7.png';
  }

  latitude: number;
  longitude: number;
  accuracy: number;
  photo: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private geoService: GeolocationService
  ) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.webPath
    );
    this.getLocationFromService();
  }

  getLocationFromService() {
    this.geoService.getLocation().then((res) => {
      this.latitude = res.latitude;
      this.longitude = res.longitude;
    });
    console.log(this.latitude);
  }
}
