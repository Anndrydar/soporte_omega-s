import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-desactivados',
  templateUrl: './desactivados.component.html',
  styleUrls: ['./desactivados.component.css']
})
export class DesactivadosComponent implements OnInit {
p: number = 1;
desactivados: any;
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
  password: '',
  idplan: 0

}


  constructor(private service: ServicioAutorizarService,
    private router: Router){}
  ngOnInit(): void {
    this.verdesactivados()
}


activarcliente(idempresa: Number,
  ruc: String, email: String, telefono: String, direccion: String,
  nombre_empresa: String, contacto: String, fecha_ingreso: String, ciudad: String,
  password: String, plan: Number){
    let activado = this.empresa = {
      ruc: ruc,
      email:email,
      telefono:telefono,
      direccion:direccion,
      nombre_empresa:nombre_empresa,
      contacto:contacto,
      fecha_ingreso:fecha_ingreso,
      ciudad:ciudad,
      password:password,
      idplan:plan
    }

 this.service.crearSolicitud(activado).subscribe(
  res =>{
    this.informacion()
    this.router.navigate(['/aceptadas'])
   } 
 )


 this.service.activarcliente(idempresa).subscribe(
  res =>{
    this.verdesactivados()
   } 
)

}


buscarPorNombre(){
this.service.buscardesactivado(this.nombre_empresa).subscribe(
  res =>{
    this.desactivados = res
   } 
)
}

verdesactivados(){
  this.service.mostrardesactivados().subscribe(
    res =>{
      this.desactivados = res
     } 
  )
}


informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Cliente activado',
    showConfirmButton: false,
    timer: 1500
  })
}

}
