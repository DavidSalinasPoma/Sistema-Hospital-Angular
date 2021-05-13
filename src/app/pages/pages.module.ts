
// Este modulo va a imprimir el (router-outlet) en su componente y necesitan importar El routing

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ruta de este modulo(Porque en este modulo se va a utilizar el <router-oulet>)
// import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';

// Formularios reactivos
import { FormsModule } from '@angular/forms';

// Componentes de este modulo 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

// Modulos importados desde otro modulos de la App
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    // Ruta de este modulo
    // PagesRoutingModule,
    RouterModule,

    // Modulos importados
    SharedModule,
    ComponentsModule
  ],
  exports: [ // Para que puedan ser utilizadas en otros modulos
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
