import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componenentes de este modulo
import { IncrementadorComponent } from './incrementador/incrementador.component';

// Formularios reactivos
import { FormsModule } from '@angular/forms';
import { DonnaComponent } from './donna/donna.component';


// Graficas con angular
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonnaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DonnaComponent
  ]
})
export class ComponentsModule { }
