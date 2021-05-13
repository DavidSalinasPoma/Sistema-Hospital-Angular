import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public progreso1: number = 25;
  public progreso2: number = 35;

  constructor() { }

  ngOnInit(): void {
  }


  public get getProgreso1(): string {
    return `${this.progreso1}%`;
  }

  public get getProgreso2(): string {
    return `${this.progreso2}%`;
  }


  // Recibiendo datos del hijo
  /**
   * cambioValorHijo
   */
  public cambioValorHijo(valor: number) {
    this.progreso1 = valor;
  }

}
