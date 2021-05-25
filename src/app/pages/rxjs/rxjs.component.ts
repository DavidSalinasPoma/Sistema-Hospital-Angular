import { Component, OnDestroy, OnInit } from '@angular/core';

// ReactivX rxjs
import { interval, Observable, Subscription } from 'rxjs';

// Operadores de rxjs
import { retry, take, map, filter } from 'rxjs/operators';
// Retry .- Intenta que se cumpla el observable las veces que uno decee
// Take .- Dice cuantas emisiones del observable se nececita
//  Map .- Sirve para transformar la informacion que recibe el observable y mutar de la manera que uno necesita

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  // Cancelando un observable
  public intervalSub: Subscription;

  constructor() { }


  ngOnInit(): void {

    // Para escuchar al observer nos debemos de suscribir
    // this.retornaObservable().pipe(
    //   retry(2)  // Intenta una y otra ves(2) en este caso dos si el observable falla
    // )
    //   .subscribe(
    //     resp => {
    //       console.log('subs: ', resp);

    //     }, error => {
    //       console.warn(error);
    //     },
    //     () => {
    //       console.info('Obs Terminado');

    //     }
    //   );

    // Metodo RETRY este oprador se utiliza cuando el observable falló para el observable 
    // Operador MAP sirve para transformar la salida de un Observable.
    // operador FILTER filtra información que fluye dentro de un observable.

    this.intervalSub = this.retornaIntervalo().subscribe(
      valor => {
        console.log(valor);
      }
    );

  }

  // Destruyendo un observable
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  retornaObservable(): Observable<number> {
    // Craar un observable Manualmente
    let i = -1;
    const obs$ = new Observable<number>(
      observer => {
        const intervalo = setInterval(() => {

          i++;

          observer.next(i); // Va a emitir (i) cada segundo

          // Finalizando un observer
          if (i === 4) {
            clearInterval(intervalo); // Esta funcion cancela intervalos
            observer.complete(); // Deja de emitir los valore del observer
          }

          // Disparando un error para ver su comportamiento
          if (i === 2) {
            observer.error('I llego al valor de dos'); // Cuando llega al valor de dos se cancela todo
          }

        }, 1000);
      }
    );
    return obs$;
  }


  retornaIntervalo(): Observable<number> {
    const intervalo$ = interval(1000).pipe(

      // El orden de los operadores Es importante
      // take(10),
      map(recibeValorObservable => {
        return recibeValorObservable + 1;
      }),
      //  El filter trabaja con ternarios
      filter(valor => (valor % 2 === 0) ? true : false),

    );
    return intervalo$;
  }



}
