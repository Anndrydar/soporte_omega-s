import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioTecnicoService } from 'src/app/servicios/servicio-tecnico.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
empresa: any;
 
constructor(
  private router: Router,
  private servicio: ServicioEmpresaService
  ){}
ngOnInit(): void {
  this.verEmpresa();
}



verEmpresa(){
  this.servicio.verEmpresa().subscribe(
    res=>{
         this.empresa = res;
         console.log(res);
    }
  )
}


exit(): void {
  localStorage.removeItem('tokens-omega');
  this.router.navigate(['/login'])
}
}
