import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ProdutoComponent } from './lista-produtos/produto/produto.component';

import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'produto', children:[
        {path: '', component: ListaProdutosComponent},
        {path: ':codigo', component: ProdutoComponent},
        {path: 'cadastrar-produto', component: CadastrarProdutoComponent}
      ]}
    ]),
    CommonModule
  ],
  declarations: [ListaProdutosComponent, CadastrarProdutoComponent, ProdutoComponent]
})
export class ProdutoModule { }
