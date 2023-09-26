import { Component, OnInit } from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioTecnicoService } from 'src/app/servicios/servicio-tecnico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  servicios: any;
  empresa: any;
  descripcion: String;

  opciones = [

    { 
      titulo: 'Iniciar sesion',
      img:'./assets/sesion.png'
    }

  ]
  constructor(private servicio:ServicioTecnicoService,
    private servicio2: ServicioEmpresaService
    ){}
  ngOnInit(): void {
  this.verServicios();
  this.verImagenHome();
}

 verServicios(){
  this.servicio.verServicios().subscribe(
    res=>{
  this.servicios = res;
  console.log(res);
    }
  )
 }
buscar(){
this.servicio.buscar(this.descripcion).subscribe(
  res=>{
  this.servicios = res;
  }
)
}


verImagenHome(){
  this.servicio2.verEmpresa().subscribe(
    res=>{
   this.empresa = res;
    }
  )
}


}
