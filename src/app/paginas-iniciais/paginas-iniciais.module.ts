import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'paginas-iniciais', children:[
        {path: '', component: LoginComponent},
        {path: 'tela-principal', component: TelaPrincipalComponent}
      ]}
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, TelaPrincipalComponent]
})
export class PaginasIniciaisModule { }
