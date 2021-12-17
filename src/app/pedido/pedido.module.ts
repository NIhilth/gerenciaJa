import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarPedidosComponent } from './gerenciar-pedidos/gerenciar-pedidos.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { AdicionarPedidoComponent } from './adicionar-pedido/adicionar-pedido.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GerenciarPedidosComponent, EditarPedidoComponent, AdicionarPedidoComponent]
})
export class PedidoModule { }
