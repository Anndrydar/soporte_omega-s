import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import {Observable} from 'rxjs'
import { Tecnico } from '../interfaces/tecnico';
import { Servicio } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
API: String = 'http://localhost:1000'
  constructor(private http: HttpClient) { }

  //categorias
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




//tecnicos
creartecnico(tecnico: Tecnico){
  return this.http.post(this.API + '/tecnicos',tecnico)
}

vertecnicos(){
  return this.http.get(this.API + '/tecnicos')
}

vertecnico(idtecnico: number): Observable<Tecnico>{
return this.http.get<Tecnico>(this.API + '/tecnico/' +idtecnico)
}

editartecnico(idtecnico: number, tecnico: Tecnico){
  return this.http.put(this.API + '/tecnico/' +idtecnico,tecnico)
}


eliminartecnico(idtecnico: number){
return this.http.delete(this.API + '/tecnico/' +idtecnico)
}


//servicios
crearservicio(servicio: Servicio){
  return this.http.post(this.API + '/servicios',servicio)
}

verservicios(){
  return this.http.get(this.API + '/tecnicos')
}

verservicio(idtecnico: number): Observable<Tecnico>{
return this.http.get<Tecnico>(this.API + '/tecnico/' +idtecnico)
}

editarservicio(idtecnico: number, tecnico: Tecnico){
  return this.http.put(this.API + '/tecnico/' +idtecnico,tecnico)
}


eliminarservicio(idtecnico: number){
return this.http.delete(this.API + '/tecnico/' +idtecnico)
}
}
