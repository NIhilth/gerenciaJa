import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor() { }

  nome = ""
  sobrenome = ""

  ngOnInit() {
  }

  VerEFicar(){
    localStorage.setItem('NOME', this.nome)
    localStorage.setItem('SOBRENOME', this.sobrenome)
    console.log(localStorage.getItem('NOME'),localStorage.getItem('SOBRENOME'))
  }
}
