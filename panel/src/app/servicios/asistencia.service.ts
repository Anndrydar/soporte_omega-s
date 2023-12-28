import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import {Observable} from 'rxjs'
import { Tecnico } from '../interfaces/tecnico';
import { Servicio } from '../interfaces/servicio';
import { Plan } from '../interfaces/plan';
import { Producto } from '../interfaces/producto';
import { Contacto } from '../interfaces/contacto';

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
  return this.http.get(this.API + '/servicios')
}

verservicio(idservicio: number): Observable<Servicio>{
return this.http.get<Servicio>(this.API + '/serviciobyid/' +idservicio)
}

editarservicio(idservicio: number, servicio: Servicio){
  return this.http.put(this.API + '/servicioup/' +idservicio,servicio)
}


eliminarservicio(idservicio: number){
return this.http.delete(this.API + '/servicio/' +idservicio)
}






//planes
crearplan(plan: Plan){
return this.http.post(this.API + '/planes',plan)
}


verplanes(){
  return this.http.get(this.API + '/planes')
}

verplan(idplan: number): Observable<Plan>{
return this.http.get<Plan>(this.API + '/plan/' +idplan)
}

editarplan(idplan: number, plan: Plan){
  return this.http.put(this.API + '/plan/' +idplan,plan)
}


eliminarplan(idplan: number){
return this.http.delete(this.API + '/plan/' +idplan)
}


//productos
crearproducto(producto: Producto){
  return this.http.post(this.API + '/enlaces',producto)
  }
  
  
  verproductos(){
    return this.http.get(this.API + '/enlaces')
  }
  
  verproducto(iden: number): Observable<Producto>{
  return this.http.get<Producto>(this.API + '/enlace/' +iden)
  }
  
  editarproducto(iden: number, producto: Producto){
    return this.http.put(this.API + '/enlace/' +iden,producto)
  }
  
  
  eliminarproducto(iden: number){
  return this.http.delete(this.API + '/enlace/' +iden)
  }



  //contactos
  crearcontacto(contacto: Contacto){
    return this.http.post(this.API + '/contacto',contacto)
    }
    
    
    vercontactos(){
      return this.http.get(this.API + '/contactos')
    }
    
    vercontacto(idred: number): Observable<Contacto>{
    return this.http.get<Contacto>(this.API + '/contacto/' +idred)
    }
    
    editarcontacto(idred: number, contacto: Contacto){
      return this.http.put(this.API + '/contacto/' +idred,contacto)
    }
    
    
    eliminarcontacto(idred: number){
    return this.http.delete(this.API + '/contacto/' +idred)
    }
  


}
