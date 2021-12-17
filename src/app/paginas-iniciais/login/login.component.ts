import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome = ""
  sobrenome = ""
  lista = [
    { nome: "João", sobrenome: "Henrique" },
    { nome: "Bruno", sobrenome: "Verbinnen" },
    { nome: "Henrique", sobrenome: "Cole" }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  VerEFicar() {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.nome == this.lista[i].nome && this.sobrenome == this.lista[i].sobrenome) {
        this.router.navigate(['../paginas-iniciais/tela-principal'])
      } else {
        console.log("Num deu")
      }
    }

  }
}
