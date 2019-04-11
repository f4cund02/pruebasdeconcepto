import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
constructor( private barcodeScanner: BarcodeScanner,
            private restService: RestService) {


}


scan() {
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);

    this.restService.enviarQR(barcodeData.text);

   }).catch(err => {
       console.log('Error', err);
       console.log('Debes escanearlo desde un celular , o quiza tu smartphone no tiene el plugin de cordova..');
   });
}

}

