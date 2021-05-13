import { Component, Input, OnInit } from '@angular/core';

// Modulo de graficas chartJS
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-donna',
  templateUrl: './donna.component.html',
  styleUrls: ['./donna.component.css']
})
export class DonnaComponent implements OnInit {


  // Recibiendo informacioon del padre
  @Input('titulo') titulo: String = 'Sin titulo';
  @Input('label') doughnutChartLabels: Label[] = ['LAbel1', 'Label2', 'Label3'];

  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  // Doughnut

  public doughnutChartType: ChartType = 'doughnut';

  // Definicion de colores
  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
