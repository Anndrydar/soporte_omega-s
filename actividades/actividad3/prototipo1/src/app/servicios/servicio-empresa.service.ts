import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
API: String = 'http://localhost:1000'
  constructor(private http:HttpClient) { }

verEmpresa(){
  return this.http.get(this.API + '/empresa')
}


}
