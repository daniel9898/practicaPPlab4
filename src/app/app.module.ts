import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // si o si para usar ng-model

import { HttpService } from './servicios/http.service'; 
import { PersonaService } from './servicios/persona.service'; 

import { AppComponent } from './app.component';
import { MostrarPersonaComponent } from './mostrar-persona/mostrar-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PersonaService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
