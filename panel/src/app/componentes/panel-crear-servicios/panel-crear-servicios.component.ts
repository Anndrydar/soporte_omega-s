import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-panel-crear-servicios',
  templateUrl: './panel-crear-servicios.component.html',
  styleUrls: ['./panel-crear-servicios.component.css']
})
export class PanelCrearServiciosComponent implements OnInit {
  servicios: any;
  categorias: any;
  tecnicos: any;
  p:number = 1;
  servicioForm: FormGroup;
  
  constructor(private service: AsistenciaService,private formBuilder: FormBuilder){
    this.servicioForm = this.formBuilder.group({
      idcategoria: ['', Validators.compose([Validators.required])],
        idtecnico: ['', Validators.compose([Validators.required])],
      descripcion: ['', 
      Validators.compose([Validators.required])],
      precio: ['', Validators.compose([Validators.required])],
      duracion: ['', Validators.compose([Validators.required,
                Validators.minLength(5)])],
    })


  }
  ngOnInit(): void {
    this.vercategorias();
    this.vertecnicos();
}


vercategorias(){
this.service.vercategorias().subscribe(
  res=>{
    this.categorias = res
  }
)
}


vertecnicos(){
  this.service.vertecnicos().subscribe(
    res =>{
      this.tecnicos = res
    }
  )
}

crearservicio(){
  if(this.servicioForm.valid){
    this.service.crearservicio(this.servicioForm.value).subscribe(
     res => {
         
     }
    )
    this.informacion()
   }else{
     this.error()
   }
}



informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Servicio creado',
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


eliminarservicio(idServicio: number){
  this.service.eliminarservicio(idServicio).subscribe(
    res=>{
        
    }
  )
}



}
