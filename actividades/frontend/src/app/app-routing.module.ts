import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { sesion } from './guards/sesion';
import { ConsultaRucComponent } from './componentes/empresa/consulta-ruc/consulta-ruc.component';
import { RegistroComponent } from './componentes/cuenta/registro/registro.component';

const routes: Routes = [
  { path: '',
  component: UsuarioComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [sesion]
  },
  {
    path: 'consulta',
    component: ConsultaCedulaComponent,
    canActivate: [sesion]
  },
  {
    path: 'consulta-ruc',
    component: ConsultaRucComponent,
    canActivate: [sesion]
  },
  {
    path: 'login',
    component: UsuarioComponent
  },
  {
    path: 'cuenta',
    component: RegistroComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
