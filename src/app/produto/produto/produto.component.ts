import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto

  numero
  nome
  valor


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProduto = route.snapshot.paramMap.get('codigo')
    this.nome = route.snapshot.paramMap.get('nome');
    this.valor = route.snapshot.paramMap.get('valor');
  }

  ngOnInit() {
  }

  /* receberValor(valores) {
    this.info.numero = valores.numero;
    this.info.nome = valores.nome;
    this.info.valor = valores.valor;
  }

  @Input() receivedValue: String; */

}
