import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{



  empresaForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private servicio: ServicioUsuarioService,
     private router: Router,
    private formBuilder: FormBuilder){
      this.empresaForm = this.formBuilder.group({
        ruc: ['',Validators.compose([Validators.required, Validators.minLength(13)
          , Validators.maxLength(20)])],
        email: ['', Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
        telefono: ['', Validators.compose([Validators.required, Validators.maxLength(10),
          Validators.minLength(10)])
      ],
        direccion: ['', Validators.compose([Validators.required,
          Validators.minLength(10)])],
        nombre_empresa: ['',[Validators.required, Validators.maxLength(100),
          Validators.minLength(3)]
      ],
        contacto: ['', Validators.compose([Validators.required, Validators.maxLength(70),
          Validators.minLength(3)])
      ],
      ciudad: ['', Validators.compose([Validators.required, Validators.maxLength(60),
        Validators.minLength(3)])
    ],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(20),
      Validators.minLength(8)])
  ],
  plan: [null, Validators.required],
      });
  }

   ngOnInit(): void {
  
}


crearEmpresa(){
  this.empresaForm.markAllAsTouched();
  if(this.empresaForm.valid){
    this.servicio.crearEmpresa(this.empresaForm.value).subscribe(
     res => {
      this.router.navigate(['/login'])
     }
    )
    this.informacion()
   }else{
     this.error()
   }
}




informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Solo queda esperar que te acepten la cuenta',
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
