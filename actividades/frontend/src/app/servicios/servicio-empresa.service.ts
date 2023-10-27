import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
API: String = 'http://localhost:1000'
API_CEDULA: String = 'http://factura.omegas-apps.com:3001/administracion'
API_RUC: String = 'https://vps.ecuacarvip.com:3001/generales'

  constructor(private http:HttpClient) { }




verEmpresa(){
  return this.http.get(this.API + '/empresa')
}


verEnlace(){
  return this.http.get(this.API + '/enlaces')
}

buscarPorCedula(cedula: String): Observable<any> {
  return this.http.get(this.API_CEDULA + '/getCedula/' + cedula)
}

buscarPorRuc(ruc:String){
return this.http.get(this.API_RUC + '/obtener_establecimientos/'+ ruc)
}

}
