import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/usuario';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

usuarios: any;

usuario: User = {
  email: '',
  password: ''
}

ngOnInit(): void {
  this.verUsuario();
}

constructor(private servicio: ServicioUsuarioService){

}


verUsuario(){
  this.servicio.verUser().subscribe(
    res =>{
        this.usuarios = res;
        console.log(res);
    }
  )
}


crear(){
  this.servicio.crearUser(this.usuario).subscribe(
    res=>{
      this.verUsuario();
      console.log(res);
    }
  )
}

}
