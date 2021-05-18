import { Component, OnInit } from '@angular/core';

// Servicios para persistencia de ajsustes
import { SettingsService } from 'src/app/services/settings.service';

// Interfas que extienda un evento
interface HtmlClassEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  public linkTheme = document.querySelector('#theme');
  // Para la persistencia del tema al actualizar
  public linkThemes: Element;

  constructor(private settingServices: SettingsService) { }

  ngOnInit(): void {
    const linkThemes = document.querySelector('#theme');
    this.settingServices.persistenciaTheme(linkThemes);
    this.checkCurrentTheme();
  }

  /**
   * changeTheme
   */
  public changeTheme(colorTheme: string) {
    // console.log(colorTheme);

    // Cambiando URL
    const url = `./assets/css/colors/${colorTheme}.css`;

    // Reemplaza la Url del tema actual
    this.linkTheme.setAttribute('href', url);

    const checkAndTheme = {
      theme: url,
      check: colorTheme
    }

    // Grabar la ultima configuración en el localStorage
    localStorage.setItem('theme', JSON.stringify(checkAndTheme));


  }

  // Cambiando el check del los colores
  /**
   * checkCurrentTheme
   */
  public checkCurrentTheme() {

    // JavaScriptDelegation
    const checkDelegation = document.querySelector('#themecolors');
    checkDelegation.addEventListener('click', (event: HtmlClassEvent) => {
      event.preventDefault();
      if (event.target.classList.contains('selector')) {
        this.eliminarClassWorking();
        const elemento = event.target;
        // console.log(elemento);
        elemento.classList.add('working');
      }

    });

  }

  /**
   * eliminarClassWorking
   */
  public eliminarClassWorking() {
    // Selecionando varios elementos
    const linksTheme = document.querySelectorAll('.selector');

    // Boorar la clase wroking por si lo tuviera
    linksTheme.forEach(element => {
      element.classList.remove('working');
    });


  }


}
