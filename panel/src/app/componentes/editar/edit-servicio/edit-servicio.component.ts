import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/interfaces/servicio';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-servicio',
  templateUrl: './edit-servicio.component.html',
  styleUrls: ['./edit-servicio.component.css']
})
export class EditServicioComponent implements OnInit {
servicio: Servicio = {
  idcategoria: 0,
  idtecnico: 0,
  descripcion: '',
  precio: 0,
  duracion:''
}
categorias:any;
tecnicos: any;


  constructor(private service: AsistenciaService, private router: Router,
    private active: ActivatedRoute
    ){}
  ngOnInit(): void {
    const params = this.active.snapshot.params;
    if(params['idservicio']){
      this.service.verservicio(params['idservicio']).subscribe(
        res =>{
         this.servicio = res[0]  
        }
      )
    }
  this.vercategorias()
  this.vertecnicos()
}

vercategorias(){
this.service.vercategorias().subscribe(
  res =>{
    this.categorias = res
  }
)
}




vertecnicos(){
  this.service.vertecnicos().subscribe(
    res =>{
      this.tecnicos = res
    }
  )
}

editar(){
this.service.editarservicio(this.servicio.idservicio,this.servicio).subscribe(
  res  => {
    this.success()
    this.router.navigate(['/servicio'])
  }
)
}


success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Servicio actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}

}

