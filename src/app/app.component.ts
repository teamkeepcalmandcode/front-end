import { Component, OnInit } from "@angular/core";
import { TokenService } from "./services/token.service";
import { IpInfoService } from "./services/ip-info.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "bip-code";
  showHeader: boolean;

  constructor(private _token: TokenService, private _ipInfo: IpInfoService) {}

  ngOnInit() {
    this.ipInfo();
    const token = this._token.getToken();
    this.showHeader = token?.isLogged;
    this._token.$addToken.subscribe(removed => {
      this.showHeader = removed;
    });
    this._token.$removeToken.subscribe(removed => {
      this.showHeader = !removed;
    });
  }

  private ipInfo() {
    this._ipInfo.getIpInfo().subscribe(info => {
      console.log(info);
    });
  }
}
