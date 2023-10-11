import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ActualInfoComponent } from './componentes/empresa/actual-info/actual-info.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavegacionComponent,
    HomeComponent,
    ActualInfoComponent,
    ConsultaCedulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
