import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioInformacionService {
API: String = 'http://localhost:1000'
  constructor(private http:HttpClient) { }
  
 

  verredsocial(){
    return this.http.get(this.API + '/contactos')
  }



}
