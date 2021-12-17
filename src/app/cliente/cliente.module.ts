import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRegistradosComponent } from './clientes-registrados/clientes-registrados.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientesRegistradosComponent, CadastroClienteComponent]
})
export class ClienteModule { }
