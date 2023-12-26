import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-crear-tecnicos',
  templateUrl: './panel-crear-tecnicos.component.html',
  styleUrls: ['./panel-crear-tecnicos.component.css']
})
export class PanelCrearTecnicosComponent implements OnInit {

tecnicos: any;
tecnicoForm: FormGroup;
private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private service: AsistenciaService, private formBuilder: FormBuilder){
    this.tecnicoForm = this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.required,
        Validators.minLength(5)])],
      cedula: ['', Validators.compose([Validators.required,
          Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', 
      Validators.compose([Validators.
        required,Validators.pattern(this.emailPattern)])],
      telefono: ['', Validators.compose([Validators.required,
              Validators.minLength(10), Validators.maxLength(10)])],
      ciudad: ['', Validators.compose([Validators.required,
                Validators.minLength(5)])],
    })
  }
  ngOnInit(): void {
    
}

creartecnico(){
  if(this.tecnicoForm.valid){
    this.service.creartecnico(this.tecnicoForm.value).subscribe(
     res => {
         this.vertecnicos();
     }
    )
    this.informacion()
   }else{
     this.error()
   }
}


vertecnicos(){
  this.service.vertecnicos().subscribe(
    res =>{
      this.tecnicos = res
    }
  )
}


eliminar(idtecnico: number){
  this.service.eliminartecnico(idtecnico).subscribe(
    res =>{
       this.vertecnicos();
    }
  )
}


informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Tecnico creado',
    showConfirmButton: false,
    timer: 1500
  })
}



error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Datos incompletos',
    showConfirmButton: false,
    timer: 1500
  })
}


}
