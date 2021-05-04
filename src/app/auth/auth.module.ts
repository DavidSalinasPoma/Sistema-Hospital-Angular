
// Este modulo no va a imprimir el <router-outlet> en su componente que tampoco tiene
// Por tanto no importa su routing 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ruta de este modulo en especifico
import { AuthRoutingModule } from './auth-routing.module';

// Componentes de este modulo en particular
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [  // Para que puedan ser urtilizados en otros modulos
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
