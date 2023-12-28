import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {


logos = [
  {
    logo: './assets/omega-s.png',
    nombre: 'Asistencia omega web'
  }
]
 
constructor(
  private router: Router,
  private servicio: ServicioEmpresaService
  ){}
ngOnInit(): void {
}





exit(): void {
  localStorage.removeItem('tokens-omega');
  this.success();
  this.router.navigate(['/login'])
}



success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'La sesion se cerro sastifactoriamente',
    showConfirmButton: false,
    timer: 1500
  })
}




}
