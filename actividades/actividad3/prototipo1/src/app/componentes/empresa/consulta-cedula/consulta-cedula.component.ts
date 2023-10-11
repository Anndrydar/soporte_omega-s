import { Component , OnInit} from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';

@Component({
  selector: 'app-consulta-cedula',
  templateUrl: './consulta-cedula.component.html',
  styleUrls: ['./consulta-cedula.component.css']
})
export class ConsultaCedulaComponent implements OnInit {
  personas: any;
  cedula:String;

  constructor(
    private servicio: ServicioEmpresaService
  ){

  }
  ngOnInit(): void {

}


buscar(){
  this.servicio.buscar(this.cedula).subscribe(
    res=>{
      this.personas = [];
      console.log(res);
    }
  )
}

}
