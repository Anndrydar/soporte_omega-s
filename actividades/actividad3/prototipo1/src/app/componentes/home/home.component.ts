import { Component, OnInit } from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';
import { ServicioTecnicoService } from 'src/app/servicios/servicio-tecnico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  servicios: any;
  empresa: any;
  productos: any;
  descripcion: String;
  social: any;
  mis: any;

  opciones = [

    { 
      titulo: 'Iniciar sesion',
      img:'./assets/sesion.png'
    }

  ]
  constructor(private servicio:ServicioTecnicoService,
    private servicio2: ServicioEmpresaService,
    private servicio3: ServicioInformacionService
    ){}
  ngOnInit(): void {
  this.verServicios();
  this.verImagenHome();
  this.verRedSocial();
  this.verEnlaces();
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


verRedSocial(){
    this.servicio3.verRedSocial().subscribe(
      res=>{
      this.social = res
      console.log(res)
      }
    )
}




verMision(){
  this.servicio3.verMision().subscribe(
    res=>{
      this.mis = res
      console.log(res)
    }
  )
}


verEnlaces(){
  this.servicio2.verEnlace().subscribe(
    res =>{
     this.productos = res;
    }
  )
}


}
