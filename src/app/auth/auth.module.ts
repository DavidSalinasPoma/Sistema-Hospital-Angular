
// Este modulo no va a imprimir el <router-outlet> en su componente que tampoco tiene
// Por tanto no importa su routing 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ruta de este modulo en especifico
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

// Componentes de este modulo en particular
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [  // Para que puedan ser urtilizados en otros modulos
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
