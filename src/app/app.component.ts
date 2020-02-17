import { Component, OnInit } from "@angular/core";
import { TokenService } from "./services/token.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "bip-code";
  showHeader: boolean;

  constructor(private _token: TokenService) {}

  ngOnInit() {
    const token = this._token.getToken();
    this.showHeader = token?.isLogged;
  }
}
