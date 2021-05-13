import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // Progreso de la barra de progreso


  // Recibe datos del padre
  // Con datos renombrados
  @Input('valor') progreso: number;

  // Recibiendo colores del padre para los botones
  @Input() btnClass: string = `btn btn-primary`;


  // Emitir propiedades y valores al padre
  @Output() salidaDeDatos = new EventEmitter<number>();


  constructor() {

  }

  ngOnInit(): void {
    console.log(this.progreso); // Esta llegando del padre
  }

  public get getPorcentaje(): string {
    return `${this.progreso}%`;
  }

  /**
   * cambiarValor del Progres
   */
  public cambiarValor(valor: number) {


    // Validacion de ls botones incrementar o decrementar
    if (this.progreso >= 100 && valor >= 0) {  // Para los posistivos
      this.salidaDeDatos.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.salidaDeDatos.emit(100);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.salidaDeDatos.emit(this.progreso);
  }


  // Escuchar cambios de el input
  /**
   * onChange
   */
  public onChange(nuevoValor: number) {

    // Validando la caja de texto
    if (nuevoValor >= 100) {

      this.progreso = 100;

    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }


    // Emitiendo valor al padre
    this.salidaDeDatos.emit(this.progreso);
  }

}
