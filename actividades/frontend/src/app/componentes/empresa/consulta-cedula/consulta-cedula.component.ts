import { Component , OnInit} from '@angular/core';
import { Consulta } from 'src/app/interfaces/empresa/consulta';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';


@Component({
  selector: 'app-consulta-cedula',
  templateUrl: './consulta-cedula.component.html',
  styleUrls: ['./consulta-cedula.component.css']
})
export class ConsultaCedulaComponent implements OnInit {
  personas: Consulta[] = [];
  cedula:String;


  constructor(
    private servicio: ServicioEmpresaService
  ){

  }
  ngOnInit(): void {

}


buscar(){
  this.servicio.buscarPorCedula(this.cedula).subscribe(
    res => {
       this.personas = [res];
    }
  );
}

}
