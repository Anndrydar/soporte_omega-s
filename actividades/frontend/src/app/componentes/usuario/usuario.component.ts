import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {



  sesiones: any={
    email:'',
    password: ''
  }


  constructor(
    private router: Router,
    private servicio: ServicioUsuarioService){
  }
ngOnInit(): void {
  
}


iniciar(){
  const login: any = {
    email: this.sesiones.email,
    password: this.sesiones.password
  };
  this.servicio.login(login).subscribe(
    res => {
      if(!res.error){
        localStorage.setItem('tokens-omega', res.token);
        console.log(res);
        alert('Acceso correcto')
        this.router.navigate(['/home']);
      }else{
        alert('Acceso denegado')
        console.log(res);
      }
    },
    error => {
      console.error(error);
    }
  );
}



}
