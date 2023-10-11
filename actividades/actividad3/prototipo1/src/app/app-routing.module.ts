import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ActualInfoComponent } from './componentes/empresa/actual-info/actual-info.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent
  },
  { path: 'actual-info',
  component: ActualInfoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consulta',
    component: ConsultaCedulaComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
