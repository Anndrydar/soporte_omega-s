import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ActualInfoComponent } from './componentes/empresa/actual-info/actual-info.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';
import { RegistroComponent } from './componentes/cuenta/registro/registro.component';
import { ConsultaRucComponent } from './componentes/empresa/consulta-ruc/consulta-ruc.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavegacionComponent,
    HomeComponent,
    ActualInfoComponent,
    ConsultaCedulaComponent,
    RegistroComponent,
    ConsultaRucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
