import { Component, OnInit } from '@angular/core';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';

@Component({
  selector: 'app-panel-aceptados',
  templateUrl: './panel-aceptados.component.html',
  styleUrls: ['./panel-aceptados.component.css']
})
export class PanelAceptadosComponent implements OnInit {
  aceptadas: any
  p: number = 1;
  nombre_empresa = ''

  constructor(private servicio: ServicioAutorizarService){}
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

}
