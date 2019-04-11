import { Component, OnInit, ApplicationRef } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from 'src/app/services/push-service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  mensajes: OSNotificationPayload[] = [];

  constructor(public pushservice: PushService,
              private applicationRef: ApplicationRef) {

  }

  ngOnInit() {
    this.pushservice.pushListener.subscribe( noti => { //para que aparezcan los mensajes cuando no estaba en accion la pagina .
        this.mensajes.unshift( noti );
        this.applicationRef.tick(); // ciclo de deteccion de cambios nuevamente .. es por un bug en la version
    });
  }

  async ionViewWillEnter() {
    console.log('will enter , cargar mensajes ' );
    this.mensajes = await this.pushservice.getMensajes();
  }
}
