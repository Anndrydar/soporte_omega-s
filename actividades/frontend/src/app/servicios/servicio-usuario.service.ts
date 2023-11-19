import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/usuario';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
API: String = 'http://localhost:1000'
user: User[];
  constructor(private http:HttpClient) { }

  //Funcion que me devuelve usuarios desde el backend con su url

login(login:User): Observable<any>{
  return this.http.post(this.API + '/sesion/', login) 
}

crearEmpresa(formData: FormData) {
  // Aquí debes ajustar la URL y cualquier otra configuración específica de tu servidor
  return this.http.post(this.API + '/registro/', formData);
}


verplanes(){
  return this.http.get(this.API + '/planes')
}

}
