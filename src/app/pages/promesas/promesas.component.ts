import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Promesas en JavaScript

    const saludo = () => {
      return new Promise((resolve, reject) => {
        if (true) {
          resolve('Hola Mundo');
        } else {
          reject(new Error('Algo salio mal'));
        }
      })
    };

    // 1.- Then() es como el suscribe de angular.
    // 2.- Then() Es cuando se resuelva(ressolve)
    // 3.- Catch() Es cuando haya una error(reject) 

    saludo().then(
      response => {
        console.log(response);
      },
      err => {
        console.log(err.message);
      }
    ); // Aqui se puede a ver otros Then()

    // Async y Await  
    const mostrarSaludo = async () => {
      try {
        const getSaludo = await saludo();
        console.log(getSaludo);

      } catch (error) {
        console.log(error.message);
      }
    };

    mostrarSaludo();

    // Otra manera
    async function getSaludo() {
      console.log(await saludo());

    }
    getSaludo();

    this.getUsuario().then(resp => console.log(resp));
  }

  /**
   * getUsuario
   */
  public getUsuario() {
    // OTRO EJEMPLO UTILIZANDO FETCH PARA HACER PETICIONES HTTPS
    //  Utilizar https://reqres.in/  https://reqres.in/api/users
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    })

  }

}
