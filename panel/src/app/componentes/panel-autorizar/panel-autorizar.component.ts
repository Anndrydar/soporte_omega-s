import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresa';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-panel-autorizar',
  templateUrl: './panel-autorizar.component.html',
  styleUrls: ['./panel-autorizar.component.css']
})
export class PanelAutorizarComponent implements OnInit {
  solicitudes: any;  
  nombre_empresa = '';


  empresa: Empresa = {
    ruc: '',
    email: '',
    telefono: '',
    direccion: '',
    nombre_empresa: '',
    contacto: '',
    fecha_ingreso: '',
    ciudad: '',
    password: ''
  }

constructor(private servicio: ServicioAutorizarService
  ){}
  ngOnInit(): void {
    this.verEmpresas();
}

buscarPorNombre(){
  this.servicio.getSolicitudes(this.nombre_empresa).subscribe(
    res=>{
      this.solicitudes = res;
    }
  )
}


verEmpresas(){
  this.servicio.getEmpresas().subscribe(
    res=>{
     this.solicitudes = res;
    }
  )
}

aceptacion(idempresa: Number,
  ruc: String, email: String, telefono: String, direccion: String,
  nombre_empresa: String, contacto: String, fecha_ingreso: String, ciudad: String,
  password: String){

let acepta = this.empresa = {
  ruc: ruc,
  email: email,
  telefono: telefono,
  direccion: direccion,
  nombre_empresa: nombre_empresa,
  contacto: contacto,
  fecha_ingreso: fecha_ingreso,
  ciudad: ciudad,
  password: password
}
this.servicio.crearSolicitud(acepta).subscribe(
  res=>{
     this.success()
     this.verEmpresas()
  }
)

const idem = idempresa.toString()
this.servicio.eliminarEmpresa(idem).subscribe()
}

rechazo(idempresa: Number){
const idem = idempresa.toString()
this.servicio.eliminarEmpresa(idem).subscribe(
  res=>{
    this.advertencia()
    this.verEmpresas()
  }
)
}

success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Empresa aceptada',
    showConfirmButton: false,
    timer: 1500
  })
}


advertencia(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Empresa rechazada',
    showConfirmButton: false,
    timer: 1500
  })
}




}
