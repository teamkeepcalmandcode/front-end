import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private _token: TokenService) {}

  ngOnInit(): void {}

  logout() {
    this._token.removeToken();
  }
}
