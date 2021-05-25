import { Component, OnInit } from '@angular/core';

// Servicios
import { SettingsService } from '../services/settings.service';


// Para utilizar una funcion global editado por david
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  // Para la persistencia del tema al actualizar
  public linkTheme: Element;

  constructor(private settingsServices: SettingsService) {

  }

  ngOnInit(): void {

    // En los modulos se dispara javascript de manera global

    customInitFunctions();
    // console.log('Hola');

    const linkTheme = document.querySelector('#theme');
    this.settingsServices.persistenciaTheme(linkTheme);
  }

}
