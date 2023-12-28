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
  productos: any;
  descripcion = '';
  social: any;
  msm: any;
  
  public logos = [
  {
    logo: './assets/omega-s.png',
    nombre: 'Asistencia omega web'
  }
]

  
  constructor(private servicio:ServicioTecnicoService,
    private servicio2: ServicioEmpresaService,
    private servicio3: ServicioInformacionService
    ){}
  ngOnInit(): void {
  this.verServicios();
  this.verRedSocial();
  this.verEnlaces();
}

 verServicios(){
  this.servicio.verServicios().subscribe(
    res  => {
      this.servicios = res
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


verRedSocial(){
    this.servicio3.verredsocial().subscribe(
      res=>{
      this.social = res
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

enviarmensaje(telefono: String,descripcion: string, msm: string){
  const numero_original = '+593' + telefono
  const cuerpo = 'Servicio: ' + descripcion + '. ' + msm
  const enlace = 'https://wa.me/' + numero_original + '?text=' + encodeURIComponent(cuerpo)
  window.open(enlace,"_blank")
}


toggleDetails(index: number): void {
  this.servicios[index].showDetails = !this.servicios[index].showDetails;
}

}
