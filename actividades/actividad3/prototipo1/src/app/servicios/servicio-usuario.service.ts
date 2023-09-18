import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/usuario';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
API: String = 'http://localhost:1000'
user: User[];
  constructor(private http:HttpClient) { }

  //Funcion que me devuelve usuarios desde el backend con su url
 verUser(){
  return this.http.get(this.API + '/usuarios')
 }

 crearUser(user:User):Observable<User[]>{
  return this.http.post<User[]>(this.API + '/usuarios/',user)
 }

}
