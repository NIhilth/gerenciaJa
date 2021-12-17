import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {TelaPrincipalComponent} from './paginas-iniciais/tela-principal/tela-principal.component'

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      { 
        path: '',
        component: TelaPrincipalComponent,
        canActivate: []
      }
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
