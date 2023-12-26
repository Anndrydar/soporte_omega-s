import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/interfaces/tecnico';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tecnico',
  templateUrl: './edit-tecnico.component.html',
  styleUrls: ['./edit-tecnico.component.css']
})
export class EditTecnicoComponent implements OnInit {
  
tecnico: Tecnico = {
  nombres: '',
  cedula: '',
  email: '',
  telefono: '',
  ciudad: ''
}

  constructor(private active: ActivatedRoute, private service: AsistenciaService,
    private router: Router
    ){}
  ngOnInit(): void {
   const params = this.active.snapshot.params
   if(params){
     this.service.vertecnico(params['idtecnico']).subscribe(
      res=>{
        this.tecnico = res[0]
      }
     )
   }    
}


editar(){
this.service.editartecnico(this.tecnico.idtecnico, this.tecnico).subscribe(
  res=>{
    this.success()
    this.router.navigate(['/tecnico'])
  }
)
}



success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Tecnico actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}



 
}
