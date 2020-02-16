import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";

@Component({
  selector: "app-dashboard-admin",
  templateUrl: "./dashboard-admin.component.html",
  styleUrls: ["./dashboard-admin.component.scss"]
})
export class DashboardAdminComponent implements OnInit {
  constructor(private _tokenService: TokenService) {}

  ngOnInit(): void {}

  logout() {
    this._tokenService.removeToken();
  }
}
