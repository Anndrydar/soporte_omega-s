import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/plan';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

plan: Plan = {
  descripcion: ''
}

  constructor(private active: ActivatedRoute,private service: AsistenciaService,
    private router: Router
    ){}
  ngOnInit(): void {
    const params = this.active.snapshot.params
    if(params){
     this.service.verplan(params['idplan']).subscribe(
      res =>{
         this.plan = res[0]
      }
     )
    }
}


editar(){
this.service.editarplan(this.plan.idplan,this.plan).subscribe(
  res =>{
    this.success()
   this.router.navigate(['/plan'])
  }
)
}



success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Plan actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}
}
