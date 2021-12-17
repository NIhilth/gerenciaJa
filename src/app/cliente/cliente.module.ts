import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRegistradosComponent } from './clientes-registrados/clientes-registrados.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

import { RouterModule} from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'cliente', children:[
        {path: '', component: ClientesRegistradosComponent},
        {path: 'cadastro-cliente', component: CadastroClienteComponent}
      ]}
    ]),
    CommonModule
  ],
  declarations: [ClientesRegistradosComponent, CadastroClienteComponent]
})
export class ClienteModule { }
