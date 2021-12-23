import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  listaProdutos = [
    {nome: 'Barra de chocolate', valor: 5.99}, 
    {nome: 'Amendoim confeitado', valor: 8.50}, 
    {nome: 'Chocotone', valor: 25.90}, 
    {nome: 'Pacote de balas', valor: 6.99}, 
    {nome: 'Pé de Moleque', valor: 3.50}, 
  ]

  constructor() { }

  ngOnInit() {
  }

}
