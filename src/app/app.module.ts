import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {LoginComponent} from './paginas-iniciais/login/login.component'
import {ClienteModule} from './cliente/cliente.module'
import {ProdutoModule} from './produto/produto.module'
import {PedidoModule} from './pedido/pedido.module'

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot([
      { 
        path: '',
        component: LoginComponent
      }
    ]),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
