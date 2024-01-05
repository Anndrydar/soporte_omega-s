import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
planes:any;



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
    private active: ActivatedRoute,
    private service: AsistenciaService
    ){}
  ngOnInit(): void {
    const params = this.active.snapshot.params
    if(params){
      this.servicio.versolicitud(params['idempresa']).subscribe(
        res =>{
          this.empresa = res[0]
        }
      )
    }

    this.verplanes();
}



editar(){
this.servicio.editarsolicitud(this.empresa.idempresa,this.empresa).subscribe(
  res =>{
  }
)
this.success()
this.router.navigate(['/aceptadas'])
}

verplanes(){
  this.service.verplanes().subscribe(
    res =>{
      this.planes = res
    }
  )
}

success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Cliente actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}
}
