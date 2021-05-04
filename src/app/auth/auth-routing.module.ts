import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de este routing
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // Ruta Padre 2
  { path: 'register', component: RegisterComponent },
  // Ruta Padre 3
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
