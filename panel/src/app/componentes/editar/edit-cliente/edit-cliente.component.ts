import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

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
    private router: Router,
    private active: ActivatedRoute
    ){}
  ngOnInit(): void {
    const params = this.active.snapshot.params
    if(params){
      this.servicio.versolicitud(params['idempresa']).subscribe(
        res =>{
          console.log(params)
           console.log(res)
        }
      )
    }
}
}
