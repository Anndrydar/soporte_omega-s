import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-panel-aceptados',
  templateUrl: './panel-aceptados.component.html',
  styleUrls: ['./panel-aceptados.component.css']
})
export class PanelAceptadosComponent implements OnInit {
  aceptadas: any
  p: number = 1;
  nombre_empresa = ''
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

  constructor(private servicio: ServicioAutorizarService,
    private router: Router){}
  ngOnInit(): void {
    this.veraceptadas()
}

veraceptadas(){
  this.servicio.getaceptados().subscribe(
    res=>{
      this.aceptadas = res
    }
  )
}


buscarPorNombre(){
this.servicio.buscarpornombre(this.nombre_empresa).subscribe(
  res =>{
   this.aceptadas = res
  }
)
}


desactivarcliente(idempresa: Number,
  ruc: String, email: String, telefono: String, direccion: String,
  nombre_empresa: String, contacto: String, fecha_ingreso: String, ciudad: String,
  password: String, plan: Number){

  let desactivado = this.empresa = {
    ruc: ruc,
    email: email,
    telefono: telefono,
    direccion:direccion,
    nombre_empresa:nombre_empresa,
    contacto:contacto,
    fecha_ingreso:fecha_ingreso,
    ciudad:ciudad,
    password:password,
    idplan:Number(plan),
   }


   this.servicio.creardesactivacion(desactivado).subscribe(
    res =>{
      this.informacion()
      this.router.navigate(['/desactivado'])
     } 
   )


   const idem = idempresa.toString()
   this.servicio.desactivarcliente(idem).subscribe(
     res =>{
       this.veraceptadas()
      } 
   )


}



informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'warning',
    title: 'Cliente desactivado',
    showConfirmButton: false,
    timer: 1500
  })
}

}
