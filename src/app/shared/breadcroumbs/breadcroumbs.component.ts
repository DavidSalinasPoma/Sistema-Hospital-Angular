import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcroumbs',
  templateUrl: './breadcroumbs.component.html',
  styleUrls: ['./breadcroumbs.component.css']
})
export class BreadcroumbsComponent implements OnInit, OnDestroy {

  public titulo: string;

  // Para cancelar el observable
  public tituloSubs$: Subscription;

  constructor(private Router: Router) {

    this.tituloSubs$ = this.getParametroRuta()
      .subscribe(data => {

        // destructuracion de un objeto
        const { titulo } = data;

        this.titulo = titulo;

        // Acceder a el titulo de la pagina
        document.title = titulo;

      }
      );

  }
  ngOnDestroy(): void {
    // Cancela la suscripcion
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getParametroRuta() {
    // captanto parametros enviados por una ruta
    return this.Router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

}
