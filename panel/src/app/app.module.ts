import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelAutorizarComponent } from './componentes/panel-autorizar/panel-autorizar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PanelCrearTecnicosComponent } from './componentes/panel-crear-tecnicos/panel-crear-tecnicos.component';
import { PanelCrearServiciosComponent } from './componentes/panel-crear-servicios/panel-crear-servicios.component';
import { PanelCrearContactoComponent } from './componentes/panel-crear-contacto/panel-crear-contacto.component';
import { PanelCrearCategoriasComponent } from './componentes/panel-crear-categorias/panel-crear-categorias.component';
import { PanelAceptadosComponent } from './componentes/panel-aceptados/panel-aceptados.component';
import { EditCategoriaComponent } from './componentes/editar/edit-categoria/edit-categoria.component';
import { TecnicoComponent } from './componentes/tecnico/tecnico.component';
import { EditTecnicoComponent } from './componentes/editar/edit-tecnico/edit-tecnico.component';
import { EditServicioComponent } from './componentes/editar/edit-servicio/edit-servicio.component';
import { PanelCrearPlanesComponent } from './componentes/panel-crear-planes/panel-crear-planes.component';
import { EditPlanComponent } from './componentes/editar/edit-plan/edit-plan.component';
import { PanelCrearProductosComponent } from './componentes/panel-crear-productos/panel-crear-productos.component';
import { EditProductoComponent } from './componentes/editar/edit-producto/edit-producto.component';
import { EditContactoComponent } from './componentes/editar/edit-contacto/edit-contacto.component';
import { DesactivadosComponent } from './componentes/desactivados/desactivados.component';
import { EditClienteComponent } from './componentes/editar/edit-cliente/edit-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelAutorizarComponent,
    NavegacionComponent,
    PanelCrearTecnicosComponent,
    PanelCrearServiciosComponent,
    PanelCrearContactoComponent,
    PanelCrearCategoriasComponent,
    PanelAceptadosComponent,
    EditCategoriaComponent,
    TecnicoComponent,
    EditTecnicoComponent,
    EditServicioComponent,
    PanelCrearPlanesComponent,
    EditPlanComponent,
    PanelCrearProductosComponent,
    EditProductoComponent,
    EditContactoComponent,
    DesactivadosComponent,
    EditClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
