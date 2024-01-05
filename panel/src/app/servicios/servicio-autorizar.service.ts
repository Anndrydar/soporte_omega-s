import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  Empresa } from '../interfaces/empresa';
import {Observable} from 'rxjs'

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

  getaceptados(){
    return this.http.get(this.API + '/aceptados')
  }

  buscarpornombre(nombre_empresa: String){
    return this.http.get(this.API + '/aceptados/' +nombre_empresa)
  }

crearSolicitud(empresa: Empresa){
  return this.http.post(this.API + '/solicitud',empresa)
}

versolicitud(idempresa: Number): Observable<Empresa>{
  return this.http.get<Empresa>(this.API + '/aceptado/' +idempresa)
  }

  editarsolicitud(idempresa:Number, empresa: Empresa){
    return this.http.put(this.API + '/aceptado/' +idempresa,empresa)
    }


eliminarEmpresa(idempresa: String){
return this.http.delete(this.API + '/empresa/' + idempresa)
}



desactivarcliente(idempresa: String){
return this.http.delete(this.API + '/aceptado/' +idempresa)
}


//desactivaciones
creardesactivacion(empresa: Empresa){
return this.http.post(this.API + '/desactivados',empresa)
}


mostrardesactivados(){
  return this.http.get(this.API + '/desactivados')
}



activarcliente(idempresa: Number){
  return this.http.delete(this.API + '/desactivado/' +idempresa)
}


buscardesactivado(nombre_empresa: String){
  return this.http.get(this.API + '/desactivado/' +nombre_empresa)
}

}
