import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Info } from 'src/app/interfaces/empresa/empresa';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';

@Component({
  selector: 'app-actual-info',
  templateUrl: './actual-info.component.html',
  styleUrls: ['./actual-info.component.css']
})
export class ActualInfoComponent implements OnInit {

  empresa: Info = {
    nombre: '',
    imagen_logo: '',
    imagen_home: ''
  }


  constructor(private servicio: ServicioEmpresaService,
    private router: Router
    ){}
  ngOnInit(): void {
    
}

crearInfo(){
  this.servicio.crearInfo(this.empresa).subscribe(
  res=>{
   console.log(res)
   this.router.navigate(['/home'])
  }
  )
}

}
