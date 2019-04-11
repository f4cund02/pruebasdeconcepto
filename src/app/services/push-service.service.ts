import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  public mensajes: OSNotificationPayload[] = [

  ];

  userId: String;
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,
              private storage: Storage) {

      this.cargarmensajes();
  }

  async getMensajes() {
    await this.cargarmensajes;
    return [...this.mensajes]; // con ... no mando referencia , sino que mando un arreglo nuevo
  }

     configuracioninicial() {
      this.oneSignal.startInit('78cf4104-d513-4e35-9436-768ff3e2a04a', '828442426856');
      // id de one signal y id de remitente firebase

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      this.oneSignal.handleNotificationReceived().subscribe((noti) => {
        console.log('notificacion recibida', noti);
        this.notificacionRecibida(noti);
      });

      this.oneSignal.handleNotificationOpened().subscribe(async(noti) => {
        console.log('notificacion abierta', noti);
        await this.notificacionRecibida(noti.notification);
      });

      this.oneSignal.getIds().then( info => {
          this.userId = info.userId;
      });


      this.oneSignal.endInit();

  }

    async notificacionRecibida( noti: OSNotification ) {
      await this.cargarmensajes();
      const payload = noti.payload;
      const existepush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID);

      if ( existepush ) {
        return;
      }

      this.mensajes.unshift( payload );
      this.pushListener.emit( payload );
      await this.guardarmensajes();


    }

    guardarmensajes() {
      this.storage.set('mensajes', this.mensajes);

    }

    async cargarmensajes() {
      // tslint:disable-next-line:max-line-length
      this.mensajes = await this.storage.get('mensajes') || []; // esto - this.storage.get("mensajes"); - me puede regresar null... entonces..
      return this.mensajes;
    }

}
