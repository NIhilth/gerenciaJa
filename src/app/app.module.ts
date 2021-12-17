import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common'

import { LoginComponent } from './paginas-iniciais/login/login.component'
import { TelaPrincipalComponent } from './paginas-iniciais/tela-principal/tela-principal.component'
import { ClienteModule } from './cliente/cliente.module'
import { ProdutoModule } from './produto/produto.module'
import { PedidoModule } from './pedido/pedido.module'

import { RouterModule } from '@angular/router';
import { CheckLogComponent } from './check-log/check-log.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckLogComponent,
    TelaPrincipalComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      { 
        path: 'tela-principal', 
        component: TelaPrincipalComponent
      }
    ]),
    BrowserModule,
    RouterModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule,
    FormsModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
