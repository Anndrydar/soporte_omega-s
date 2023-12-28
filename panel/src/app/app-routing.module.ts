import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAutorizarComponent } from './componentes/panel-autorizar/panel-autorizar.component';
import { PanelCrearCategoriasComponent } from './componentes/panel-crear-categorias/panel-crear-categorias.component';
import { PanelAceptadosComponent } from './componentes/panel-aceptados/panel-aceptados.component';
import { EditCategoriaComponent } from './componentes/editar/edit-categoria/edit-categoria.component';
import { PanelCrearTecnicosComponent } from './componentes/panel-crear-tecnicos/panel-crear-tecnicos.component';
import { EditTecnicoComponent } from './componentes/editar/edit-tecnico/edit-tecnico.component';
import { PanelCrearServiciosComponent } from './componentes/panel-crear-servicios/panel-crear-servicios.component';
import { EditServicioComponent } from './componentes/editar/edit-servicio/edit-servicio.component';
import { PanelCrearPlanesComponent } from './componentes/panel-crear-planes/panel-crear-planes.component';
import { EditPlanComponent } from './componentes/editar/edit-plan/edit-plan.component';
import { PanelCrearProductosComponent } from './componentes/panel-crear-productos/panel-crear-productos.component';
import { EditProductoComponent } from './componentes/editar/edit-producto/edit-producto.component';


const routes: Routes = [
  {
    path: '',
    component: PanelAutorizarComponent
  },

  //categorias
  {
    path: 'categoria',
    component: PanelCrearCategoriasComponent
  },
  {
    path: 'aceptadas',
    component: PanelAceptadosComponent
  },
  {
    path: 'categoria/edit/:idcategoria',
    component: EditCategoriaComponent
  },

  //tecnicos
  {
    path: 'tecnico',
    component: PanelCrearTecnicosComponent
  },
  {
    path: 'tecnico/edit/:idtecnico',
    component: EditTecnicoComponent
  },


  //servicios
  {
    path: 'servicio',
    component: PanelCrearServiciosComponent
  },
  {
    path: 'servicio/edit/:idservicio',
    component: EditServicioComponent
  },


  //planes
  {
    path: 'plan',
    component: PanelCrearPlanesComponent
  },
  {
    path: 'plan/edit/:idplan',
    component: EditPlanComponent
  },

  //productos
  {
    path: 'producto',
    component: PanelCrearProductosComponent
  },
  {
    path: 'producto/edit/:iden',
    component: EditProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
