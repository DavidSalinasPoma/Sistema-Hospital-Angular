import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de esta ruta
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

// Definiendo la rutas de modulo Pages
const routes: Routes = [

  // Ruta Padre 1
  // Configurando las rutas hijas del este componente
  {

    // Colocar rutas a partir de un path (Migajas de PAN)
    path: 'dashboard',
    component: PagesComponent, // Aqui(PagesComponent) se va imprimir el (router-outlet)
    children: [
      { path: '', component: DashboardComponent },  // es un componente hijo
      { path: 'progress', component: ProgressComponent }, // es un componente hijo
      { path: 'grafica1', component: Grafica1Component }, // es un componente hijo


      // { path: 'account-setting', component: AccountSettingComponent },
      // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // debe ser importado en alguna parte
  exports: [RouterModule]
})
export class PagesRoutingModule { }
