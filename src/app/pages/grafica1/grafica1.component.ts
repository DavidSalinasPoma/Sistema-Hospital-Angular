import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {


  public label: string[] = ['David', 'Made', 'Milett']
  public data: number[] = [10, 15, 40];

  constructor() { }

  ngOnInit(): void {
  }

}
