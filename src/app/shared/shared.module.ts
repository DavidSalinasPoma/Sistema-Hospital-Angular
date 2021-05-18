// Este modulo no tiene un routing

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Es para poder utilizar rutas en este modulo
import { RouterModule } from '@angular/router';


// Componentes este Modulo
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcroumbsComponent } from './breadcroumbs/breadcroumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcroumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ // Para que pueda ser utilizado en otros modulos
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcroumbsComponent
  ]
})
export class SharedModule { }
