import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutorizarService {
API: String = 'http://localhost:1000'
  

constructor(private http: HttpClient) { 

  }


  getSolicitudes(nombre_empresa: String){
    return this.http.get(this.API + '/solicitud/' + nombre_empresa)
  }


  getEmpresas(){
    return this.http.get(this.API + '/ver')
  }

crearSolicitud(empresa: Empresa){
  return this.http.post(this.API + '/solicitud',empresa)
}


eliminarEmpresa(idempresa: String){
return this.http.delete(this.API + '/empresa/' + idempresa)
}

}
