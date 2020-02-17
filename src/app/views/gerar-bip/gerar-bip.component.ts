import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";
import { Route, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./gerar-bip.component.html",
  styleUrls: ["./gerar-bip.component.scss"]
})
export class GerarBipComponent implements OnInit {
  idCampanha: string;
  idEscolhaUsuario: string;

  constructor(private _token: TokenService, public _route: ActivatedRoute) {}

  ngOnInit(): void {
    const token = this._token.getToken();
    if (!token?.isLogged) this._token.setToken(true, false);

    this._route.paramMap.subscribe(params => {
      this.idCampanha = params.get("idCampanha");
      this.idEscolhaUsuario = params.get("idEscolhaUsuario");
    });
  }
}
