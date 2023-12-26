import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAutorizarComponent } from './componentes/panel-autorizar/panel-autorizar.component';
import { PanelCrearCategoriasComponent } from './componentes/panel-crear-categorias/panel-crear-categorias.component';
import { PanelAceptadosComponent } from './componentes/panel-aceptados/panel-aceptados.component';
import { EditCategoriaComponent } from './componentes/editar/edit-categoria/edit-categoria.component';
import { PanelCrearTecnicosComponent } from './componentes/panel-crear-tecnicos/panel-crear-tecnicos.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
