import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-crear-productos',
  templateUrl: './panel-crear-productos.component.html',
  styleUrls: ['./panel-crear-productos.component.css']
})
export class PanelCrearProductosComponent implements OnInit {
  p: number = 1;
  productos: any;


  
  productoForm: FormGroup;
  
    constructor(private servicio: AsistenciaService, private router: Router,
      private formBuilder: FormBuilder
      ){
        this.productoForm = this.formBuilder.group({
          nombre: ['', Validators.compose([Validators.required,
            Validators.minLength(5)])],
          url: ['', Validators.compose([Validators.required,
              Validators.minLength(5)])],
        })
      }
  
  
  
  
  
    ngOnInit(): void {
      this.verproductos();
  }
  
  crearproductos(){
    if(this.productoForm.valid){
     this.servicio.crearproducto(this.productoForm.value).subscribe(
      res => {
          this.verproductos()
      }
     )
     this.informacion()
    }else{
      this.error()
    }
  
  }
  
  verproductos(){
    this.servicio.verproductos().subscribe(
      res =>{
        this.productos = res;
      }
    )
  }
  
  
  informacion(){
    Swal.fire({
      position: 'top-end',
      width: 400,
      icon: 'info',
      title: 'Producto creado',
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
  
  
  
  eliminarproducto(iden: number){
    this.servicio.eliminarproducto(iden).subscribe(
      res =>{
         this.verproductos()
      }
    )
  }





}
