import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-panel-crear-contacto',
  templateUrl: './panel-crear-contacto.component.html',
  styleUrls: ['./panel-crear-contacto.component.css']
})
export class PanelCrearContactoComponent implements OnInit {
  p: number = 1;
  contactos: any;


  
  contactoForm: FormGroup;
  
    constructor(private servicio: AsistenciaService, private router: Router,
      private formBuilder: FormBuilder
      ){
        this.contactoForm = this.formBuilder.group({
          nombre: ['', Validators.compose([Validators.required,
            Validators.minLength(5)])],
          url: ['', Validators.compose([Validators.required,
              Validators.minLength(5)])],
        })
      }
  
  
  
  
  
    ngOnInit(): void {
      this.vercontactos();
  }
  
  crearcontactos(){
    if(this.contactoForm.valid){
     this.servicio.crearcontacto(this.contactoForm.value).subscribe(
      res => {
          this.vercontactos()
      }
     )
     this.informacion()
    }else{
      this.error()
    }
  
  }
  
  vercontactos(){
    this.servicio.vercontactos().subscribe(
      res =>{
        this.contactos = res;
      }
    )
  }
  
  
  informacion(){
    Swal.fire({
      position: 'top-end',
      width: 400,
      icon: 'info',
      title: 'Contacto creado',
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
  
  
  
  eliminarcontacto(idred: number){
    this.servicio.eliminarcontacto(idred).subscribe(
      res =>{
         this.vercontactos()
      }
    )
  }





}
