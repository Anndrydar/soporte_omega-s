import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';



@Component({
  selector: 'app-panel-crear-planes',
  templateUrl: './panel-crear-planes.component.html',
  styleUrls: ['./panel-crear-planes.component.css']
})
export class PanelCrearPlanesComponent implements OnInit {
  p: number = 1;
  planes: any;


  
  planForm: FormGroup;
  
    constructor(private servicio: AsistenciaService, private router: Router,
      private formBuilder: FormBuilder
      ){
        this.planForm = this.formBuilder.group({
          descripcion: ['', Validators.compose([Validators.required,
            Validators.minLength(5)])],
        })
      }
  
  
  
  
  
    ngOnInit(): void {
      this.verplanes();
  }
  
  crearplanes(){
    if(this.planForm.valid){
     this.servicio.crearplan(this.planForm.value).subscribe(
      res => {
          this.verplanes();
      }
     )
     this.informacion()
    }else{
      this.error()
    }
  
  }
  
  verplanes(){
    this.servicio.verplanes().subscribe(
      res =>{
        this.planes = res;
      }
    )
  }
  
  
  informacion(){
    Swal.fire({
      position: 'top-end',
      width: 400,
      icon: 'info',
      title: 'Plan creado',
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
  
  
  
  eliminarplan(idplan: number){
    this.servicio.eliminarplan(idplan).subscribe(
      res =>{
         this.verplanes()
      }
    )
  }
}
