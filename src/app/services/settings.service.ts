import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {

  }

  /**
 * persistenciaTheme
 */
  public persistenciaTheme(linkTheme: Element) {


    let url = localStorage.getItem('theme');
    const nuevoUrl = JSON.parse(url)
    // console.log(nuevoUrl);


    if (url === null) { // Cuando este vacio

      url = './assets/css/colors/default-dark.css'
      linkTheme.setAttribute('href', url);

    }
    linkTheme.setAttribute('href', nuevoUrl.theme);

    // Persistencia del check al actualizar
    const links = document.querySelectorAll('.selector');

    links.forEach(element => {
      if (element.getAttribute('data-theme') === nuevoUrl.check) {
        element.classList.add('working');
      }
    });

  }
}
