import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarPedidosComponent } from './gerenciar-pedidos/gerenciar-pedidos.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { AdicionarPedidoComponent } from './adicionar-pedido/adicionar-pedido.component';

import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'pedido', component: GerenciarPedidosComponent }
    ]),
    CommonModule
  ],
  declarations: [GerenciarPedidosComponent, EditarPedidoComponent, AdicionarPedidoComponent]
})
export class PedidoModule { }
