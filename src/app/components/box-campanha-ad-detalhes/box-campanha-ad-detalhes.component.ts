import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-box-campanha-ad-detalhes",
  templateUrl: "./box-campanha-ad-detalhes.component.html",
  styleUrls: ["./box-campanha-ad-detalhes.component.scss"]
})
export class BoxCampanhaAdDetalhesComponent implements OnInit {
  @Input()
  nomeCampanha: string;
  @Input()
  pontosGlobo: string;
  @Input()
  cupomDesconto: boolean;
  @Input()
  imagemCampanha: string;
  @Input()
  mostrarPontosGlobo = true;
  @Input()
  id: number;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  gerarRelatorio(id: number) {
    this._router.navigate([`/relatorio-campanha/${id}`]);
  }
}
