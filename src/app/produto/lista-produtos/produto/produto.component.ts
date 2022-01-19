import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto

  info = {
    numero: 0,
    nome: '',
    valor: 0.0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProduto = route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
  }

  receberValor(valores) {
    console.log(valores)
    this.info.numero = valores.numero;
    this.info.nome = valores.nome;
    this.info.valor = valores.valor;
    console.log(this.info)
  }

  @Input() receivedValue: String;

}
