import { Component, OnInit } from '@angular/core';

// Para utilizar una funcion global editado por david
// declare function customInitFunctions();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // customInitFunctions();
  }

}
