import { Component, OnInit } from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html',
  styleUrls: ['./consulta-ruc.component.css']
})
export class ConsultaRucComponent implements OnInit {

personas: any= [];
ruc:String;

constructor(
  private servicio: ServicioEmpresaService
){

}
ngOnInit(): void {
    
}


buscar(){
  this.servicio.buscarPorRuc(this.ruc).subscribe(
     res => {
       this.personas = res;
       console.log(res);
    }
  )
}
//1309182440001




}
