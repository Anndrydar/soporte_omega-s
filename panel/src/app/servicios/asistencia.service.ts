import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
API: String = 'http://localhost:1000'
  constructor(private http: HttpClient) { }

crearcategoria(categoria: Categoria){
  return this.http.post(this.API + '/categorias',categoria)
}

vercategorias(){
  return this.http.get(this.API + '/categorias')
}


vercategoria(idcategoria:number): Observable<Categoria>{
  return this.http.get<Categoria>(`${this.API}/categoria/${idcategoria}`)
}


editarcategoria(idcategoria: number, categoria: Categoria) {
  return this.http.put(this.API + '/categoria/' +idcategoria,categoria);
}

eliminarcategoria(idcategoria: number){
return this.http.delete(this.API + '/categoria/' +idcategoria)
}


}
