import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/usuario';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Empresa } from '../interfaces/empresa/empresa';

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

crearEmpresa(empresa: Empresa){
  return this.http.post(this.API + '/registro/',empresa)
}

}
