import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../paginasIniciais/login/login.component';
import { TelaPrincipalComponent } from '../paginasIniciais/tela-principal/tela-principal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, TelaPrincipalComponent]
})
export class PaginasIniciaisModule { }
