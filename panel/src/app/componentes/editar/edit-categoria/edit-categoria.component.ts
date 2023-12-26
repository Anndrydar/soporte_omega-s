import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit{

 categoria:Categoria  = {
  idcategoria:0,
  descripcion:''
 }

 constructor(private active: ActivatedRoute, private service: AsistenciaService,
  private router: Router) {}


ngOnInit(): void {
  const params = this.active.snapshot.params;
  if (params['idcategoria']) {
    this.service.vercategoria(params['idcategoria']).subscribe(
      res =>{
        this.categoria = res[0]
        console.log(params)
      }
    )
  }
}


editar() {
  if (!isNaN(this.categoria.idcategoria) && this.categoria.descripcion) {
    this.service.editarcategoria(this.categoria.idcategoria, this.categoria).subscribe(
      res => {
        this.router.navigate(['/categoria']);
      },
      error => {
        console.error("Error al editar la categoría:", error);
      }
    );
  } else {
    console.error("ID de categoría no válido o descripción indefinida");
  }
}






}
