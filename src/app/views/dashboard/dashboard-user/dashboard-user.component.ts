import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/services/token.service";
export interface UserToken {
  isLogged: boolean;
  isAdmin: boolean;
  idPartner?: number;
}
@Component({
  selector: "app-dashboard-user",
  templateUrl: "./dashboard-user.component.html",
  styleUrls: ["./dashboard-user.component.scss"]
})
export class DashboardUserComponent implements OnInit {
  token: UserToken;
  constructor(private _token: TokenService) {}

  ngOnInit(): void {}
}
