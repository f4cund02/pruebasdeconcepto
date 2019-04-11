import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarEscaneoService {

  result : any[];
  data : Observable<any>;

  constructor(private http: HttpClient) { }

  enviarXrest(format: string, text: string){


    if(format.length===0 || text.length===0){
      console.log('Error en -enviarXrest- , largo 0');
    } else{
      console.log('format y text:',format,text);
      

      // USAR ESTE METODO
      // Funcion para enviarlo por rest o consumir! 
      // this.data = this.http.get("");
      // this.data.subscribe( data => {
      //   this.result = data
      //  });

      





      // ---O USAR ESTE OTRO METODO------------------------------------------------------
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });

    // let postData = {
    //         "name": "Customer004",
    //         "email": "customer004@email.com",
    //         "tel": "0000252525"
    // }

    // this.http.post("http://127.0.0.1:3000/customers", postData, requestOptions)
    //   .subscribe(data => {
    //     console.log(data['_body']);
    //    }, error => {
    //     console.log(error);
    //   });
// ---------------------------------------------------------

    }

  }

  enviarMiUbicacion( coords : string){
      console.log("servicio enviar ubicacion: ",coords);
  }

  
}
