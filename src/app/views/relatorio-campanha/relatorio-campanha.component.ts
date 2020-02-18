import { Component, OnInit } from "@angular/core";
import { UserToken, TokenService } from "src/app/services/token.service";
import { Subscription } from "rxjs";
import { Campanha } from "../dashboard/dashboard-admin";
import { ClienteService } from "../dashboard/dashboard-admin/service/cliente.service";
import { RelatorioService } from "./service/relatorio.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./relatorio-campanha.component.html",
  styleUrls: ["./relatorio-campanha.component.scss"]
})
export class RelatorioCampanhaComponent implements OnInit {
  token: UserToken;
  $cliente: Subscription;
  nome: any;
  relatorio: any;
  constructor(
    private _tokenService: TokenService,
    private _clienteService: ClienteService,
    private _relatorioService: RelatorioService,
    private _router: ActivatedRoute
  ) {
    this.token = this._tokenService.getToken();
  }

  ngOnInit(): void {
    this.getNomeCliente(this.token.idPartner);
    this._router.paramMap.subscribe(params => {
      this.getDadosRelatorio(parseInt(params.get("id"), 10));
    });
  }

  logout() {
    this._tokenService.removeToken();
  }

  getNomeCliente(id: number) {
    this._clienteService.getNomeCliente(id).subscribe(nome => {
      this.nome = nome.filter(cliente => {
        return cliente.id === id;
      })[0];
    });
  }

  getDadosRelatorio(id: number) {
    this._relatorioService.getRelatorio(id).subscribe(relatorio => {
      this.relatorio = relatorio;
    });
  }
}
