import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioInformacionService {
API: String = 'http://localhost:1000'
  constructor(private http:HttpClient) { }
  
 

  verRedSocial(){
    return this.http.get(this.API + '/informacion')
  }

verMision(){
  return this.http.get(this.API + '/mision')
}



}
