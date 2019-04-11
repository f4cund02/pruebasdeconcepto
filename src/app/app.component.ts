import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public contador = 100;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rest: RestService
  ) {
    this.initializeApp();
    this.simuladorBat();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      if (this.getContador() === 50) {
        // alert("Te queda 50% de bateria");
        this.rest.informarBateria(50);
      } else if (this.getContador() === 10) {
       // alert("Te queda 10% de bateria");
        this.rest.informarBateria(10);

      }
      this.splashScreen.hide();

    });
  }

  getContador() {
    return this.contador;
  }
      simuladorBat() {
          const interval = setInterval(function() {
              this.contador--;
              if (this.contador === 95) {
                //alert('ojo - ' + this.contador);
              } else {
                //alert(this.contador);
              }
          }.bind(this), 2000);
      }
  
}
