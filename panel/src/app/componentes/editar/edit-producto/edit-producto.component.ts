import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    url: ''
  }
  
  constructor(private active: ActivatedRoute, private service: AsistenciaService,
    private router: Router
    ){}
  ngOnInit(): void {
    const params = this.active.snapshot.params
    if(params){
     this.service.verproducto(params['iden']).subscribe(
      res  =>{
        this.producto = res[0]
      }
     )
    }
}


editar(){
  this.service.editarproducto(this.producto.iden, this.producto).subscribe(
    res =>{
      this.success()
      this.router.navigate(['/producto'])
    }
  )
}


success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Producto actualizado',
    showConfirmButton: false,
    timer: 1500
  })
}
}
