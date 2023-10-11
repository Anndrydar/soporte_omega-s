import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../interfaces/empresa/empresa';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
API: String = 'http://localhost:1000'
SRI: String = 'http://factura.omegas-apps.com:3001/administracion'
empresa: Info[];
  constructor(private http:HttpClient) { }


  crearInfo(empresa:Info):Observable<Info[]>{
    return this.http.post<Info[]>(this.API + '/empresa/',empresa)
  }


verEmpresa(){
  return this.http.get(this.API + '/empresa')
}


verEnlace(){
  return this.http.get(this.API + '/enlaces')
}

buscar(cedula: String){
  return this.http.get(this.SRI + '/getCedula/' + cedula)
}

}
