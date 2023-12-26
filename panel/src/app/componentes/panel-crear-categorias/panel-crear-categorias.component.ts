import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-crear-categorias',
  templateUrl: './panel-crear-categorias.component.html',
  styleUrls: ['./panel-crear-categorias.component.css']
})
export class PanelCrearCategoriasComponent implements OnInit {
p: number = 1;
categorias: any
categoria: Categoria = {
  descripcion: ''
}

categoriaForm: FormGroup;

  constructor(private servicio: AsistenciaService, private router: Router,
    private formBuilder: FormBuilder
    ){
      this.categoriaForm = this.formBuilder.group({
        descripcion: ['', Validators.compose([Validators.required,
          Validators.minLength(5)])],
      })
    }





  ngOnInit(): void {
    this.vercategorias();
}

crearcategorias(){
  if(this.categoriaForm.valid){
   this.servicio.crearcategoria(this.categoriaForm.value).subscribe(
    res => {
        this.vercategorias();
    }
   )
   this.informacion()
  }else{
    this.error()
  }

}

vercategorias(){
  this.servicio.vercategorias().subscribe(
    res =>{
      this.categorias = res;
    }
  )
}


informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Categoria creada',
    showConfirmButton: false,
    timer: 1500
  })
}



error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Datos incompletos',
    showConfirmButton: false,
    timer: 1500
  })
}



eliminarcategoria(idcategoria: number){
  this.servicio.eliminarcategoria(idcategoria).subscribe(
    res =>{
       this.vercategorias()
    }
  )
}

}
