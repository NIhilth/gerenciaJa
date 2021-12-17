import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

import { RouterModule} from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'produto', children:[
        {path: '', component: ListaProdutosComponent},
        {path: 'cadastrar-produto', component: CadastrarProdutoComponent}
      ]}
    ]),
    CommonModule
  ],
  declarations: [ListaProdutosComponent, CadastrarProdutoComponent]
})
export class ProdutoModule { }
