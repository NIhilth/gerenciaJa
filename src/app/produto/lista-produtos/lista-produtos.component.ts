import { Component, OnInit/* , Output, EventEmitter */} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  listaProdutos = [
    {codigo: 1, nome: 'Barra de chocolate', valor: 5.99},
    {codigo: 2, nome: 'Amendoim confeitado', valor: 8.50},
    {codigo: 3, nome: 'Chocotone', valor: 25.90},
    {codigo: 4, nome: 'Pacote de bala', valor: 6.99},
    {codigo: 5, nome: 'Pé de Moleque', valor: 3.50}
  ]

  /* @Output() valor = new EventEmitter<object>()
 */
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  verProduto(produto){
    /* this.valor.emit(this.listaProdutos[produto - 1]) */
    this.router.navigate(['/produto/',produto])
  }

}
