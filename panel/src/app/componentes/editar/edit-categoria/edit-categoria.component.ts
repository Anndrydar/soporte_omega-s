import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { AsistenciaService } from 'src/app/servicios/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit{

 categoria:Categoria  = {
  descripcion:''
 }

 constructor(private active: ActivatedRoute, private service: AsistenciaService,
  private router: Router) {}


ngOnInit(): void {
  const params = this.active.snapshot.params;
  if (params['idcategoria']) {
    this.service.vercategoria(params['idcategoria']).subscribe(
      res =>{
        this.categoria = res[0]
      }
    )
  }
}


editar() {
    this.service.editarcategoria(this.categoria.idcategoria, this.categoria).subscribe(
      res => {
        this.success();
        this.router.navigate(['/categoria']);
      },
    );

}


success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Categoria actualizada',
    showConfirmButton: false,
    timer: 1500
  })
}
}