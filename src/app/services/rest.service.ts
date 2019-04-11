import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  result : any[];
  data : Observable<any>;

  constructor(private http: HttpClient) { }

  informarBateria(bat: number){
    console.log("Se informo tu estado de bateria : "+bat);
       let path = 'http://192.168.1.55:8080/algo1/';
       this.data = this.http.post(path,bat);
       this.data.subscribe(data=>{
            this.result = data;
            console.log("Se informo tu estado de bateria : "+bat+"respServer: "+this.result);
       });
  }

  enviarQR(text: String){
    if(text.length >  0 ){
       let path = 'http://192.168.1.55:8080/algo1/';
       this.data = this.http.post(path,text);
       this.data.subscribe(data=>{
            this.result = data;
            console.log("Se envio QR : "+text+"respServer: "+this.result);
       });
    }else{
      console.log("Ups , problemas con el QR :"+text);

    }
    
  }

  enviarLocalizacion(localizacion: String){
    let path = 'http://192.168.1.55:8080/algo1/';
    this.data = this.http.post(path,localizacion);
    this.data.subscribe(data=>{
         this.result = data;
         console.log("Se informo tu localizacion : "+localizacion+"respServer: "+this.result);
    });
  }

  enviarPagopaypal(correo: String , pago: number){
    var param = {
      "correo:":correo,
      "pago:":pago
    };
    
    console.log("Enviando pago :"+correo,pago);
    let path = 'http://192.168.1.55:8080/algo1/';
    this.data = this.http.post(path,param);
    this.data.subscribe(data=>{
         this.result = data;
         console.log("Se ienvio tu pago : "+pago+"respServer: "+this.result);
    });
  }

}
