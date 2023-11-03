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
  selectedFile: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

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
  contrato: [null, Validators.required],
      });
  }

   ngOnInit(): void {
  
}


crearEmpresa() {
  this.empresaForm.markAllAsTouched();
  if (this.empresaForm.valid && this.selectedFile) {
    const formData = new FormData();
    formData.append('ruc', this.empresaForm.get('ruc').value);
    formData.append('email', this.empresaForm.get('email').value);
    formData.append('telefono', this.empresaForm.get('telefono').value);
    formData.append('direccion', this.empresaForm.get('direccion').value);
    formData.append('nombre_empresa', this.empresaForm.get('nombre_empresa').value);
    formData.append('contacto', this.empresaForm.get('contacto').value);
    formData.append('ciudad', this.empresaForm.get('ciudad').value);
    formData.append('password', this.empresaForm.get('password').value);

    
    formData.append('contrato', this.selectedFile, 'contrato.pdf');

    this.servicio.crearEmpresa(formData).subscribe(
      (response) => {
        console.log(response);
        this.informacion();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    this.error();
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
