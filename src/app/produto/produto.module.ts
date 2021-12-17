import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaProdutosComponent, CadastrarProdutoComponent]
})
export class ProdutoModule { }
