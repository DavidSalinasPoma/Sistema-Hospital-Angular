import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos Personalizados
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// Componentes padres
import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    // Routing principal de la app
    AppRoutingModule,
    // Modulos hijos de toda la aplicacion
    AuthModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
