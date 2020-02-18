import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";
import { ClienteService } from "./service/cliente.service";
import { Subscription } from "rxjs";
import { Campanha } from "./index";
export interface UserToken {
  isLogged: boolean;
  isAdmin: boolean;
  idPartner?: number;
}
@Component({
  selector: "app-dashboard-admin",
  templateUrl: "./dashboard-admin.component.html",
  styleUrls: ["./dashboard-admin.component.scss"]
})
export class DashboardAdminComponent implements OnInit {
  token: UserToken;
  $cliente: Subscription;
  infoCampanha: Campanha[];
  nome: any;
  constructor(
    private _tokenService: TokenService,
    private _clienteService: ClienteService
  ) {
    this.token = this._tokenService.getToken();
  }

  ngOnInit(): void {
    this.getCampanha(this.token.idPartner);
    this.getNomeCliente(this.token.idPartner);
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

  getCampanha(id: number) {
    this.$cliente = this._clienteService.getCampanha(id).subscribe(campanha => {
      this.infoCampanha = campanha;
    });
  }
}
