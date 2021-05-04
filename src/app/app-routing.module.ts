import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

// Rutas
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [


  // path:'/dashboard' pagesRouting
  // path:'/auth' AuthRouting
  // path:'/medicos' MedicosRouting
  // path:'/compras' ComprasRouting

  // Ruta Padre 1  
  // Esta ruta tiene rutas hijas
  // Cuando la ruta va a ser vacio va a redireccionar al dashboard 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Ruta Padre 4
  // Cuando se equivoquen de escribir una ruta
  { path: '**', component: NopagesfoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // Rutas tomadas
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [
    RouterModule // Es para que pueda ser utilizado en todos los modulos
  ]
})
export class AppRoutingModule { }
