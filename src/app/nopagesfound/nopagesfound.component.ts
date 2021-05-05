import { Component, OnInit } from '@angular/core';
import { YEAR } from './../../assets/plugins/moment/src/lib/units/constants';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: [
    './nopagesfound.component.css'
  ]
})
export class NopagesfoundComponent implements OnInit {

  public anioActual: number;

  constructor() {
    this.anioActual = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
