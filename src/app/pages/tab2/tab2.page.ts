import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private geolocation: Geolocation,
              private restService: RestService) {}


 public getGeolocation() {
   console.log('proximamente tus coordenadas');

   this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    const coords = resp.coords.latitude + ',' + resp.coords.longitude;
    console.log(coords);
    this.restService.enviarLocalizacion(coords);
   }).catch((error) => {
     console.log('Error getting location', error);
   });


 }

 public pagoPaypal(){
   this.restService.enviarPagopaypal("correo@falso.com",500);
 }

}
