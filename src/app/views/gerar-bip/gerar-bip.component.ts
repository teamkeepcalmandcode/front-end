import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { IpInfoService } from "src/app/services/ip-info.service";
import { CampanhaService } from "./service/campanha.service";
import { squash } from "./animation";

export interface ResultCampanha {
  partner: string;
  campaign: string;
  choice: string;
}

@Component({
  templateUrl: "./gerar-bip.component.html",
  styleUrls: ["./gerar-bip.component.scss"],
  animations: [squash]
})
export class GerarBipComponent implements OnInit {
  idCampanha: string;
  idEscolhaUsuario: string;
  ipInfoUser: any;
  showResult: boolean;
  texto: string;
  resultCampanha: ResultCampanha;
  showRedirect: boolean;

  constructor(
    private _token: TokenService,
    private _ipSerivce: IpInfoService,
    public _route: ActivatedRoute,
    private _router: Router,
    public _campanha: CampanhaService
  ) {}

  ngOnInit(): void {
    const token = this._token.getToken();
    if (!token?.isLogged) this._token.setToken(true, false);

    this._route.paramMap.subscribe(params => {
      this.idCampanha = params.get("idCampanha");
      this.idEscolhaUsuario = params.get("idEscolhaUsuario");
      this.getIPInfo(this.idCampanha, this.idEscolhaUsuario);
    });
  }

  private getIPInfo(idCampanha, idEscolhaUsuario) {
    this._ipSerivce.getIpInfo().subscribe(ipInfo => {
      this.postCampanha(idCampanha, idEscolhaUsuario, ipInfo);
    });
  }

  private postCampanha(idCampanha, idUsuario, ipInfo) {
    let post = {
      idCampaign: idCampanha,
      idItemCampaign: idUsuario,
      city: ipInfo.city
    };
    this._campanha.postCampanha(post).subscribe((result: ResultCampanha) => {
      this.resultCampanha = result;
      this.showResult = true;

      setTimeout(() => {
        this.showResult = false;
        this.showRedirect = true;
      }, 6000);
      setTimeout(() => {
        this._router.navigate(["/login"]);
      }, 10000);
    });
  }
}
