import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, TelaPrincipalComponent]
})
export class PaginasIniciaisModule { }
