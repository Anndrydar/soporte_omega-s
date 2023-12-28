import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.css']
})
export class EditContactoComponent implements OnInit {

contacto: Contacto = {
  nombre: '',
  url: ''
}

  constructor(private active: ActivatedRoute, private service: AsistenciaService,
    private router: Router){}
  ngOnInit(): void {
  const params = this.active.snapshot.params
  if(params){
  this.service.vercontacto(params['idred']).subscribe(
    res=>{
      this.contacto = res[0]
    }
  )
  }    
}


editar(){
  this.service.editarcontacto(this.contacto.idred, this.contacto).subscribe(
    res=>{
      this.success()
      this.router.navigate(['/contacto'])
    }
  )
}



success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Contacto actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}

}
