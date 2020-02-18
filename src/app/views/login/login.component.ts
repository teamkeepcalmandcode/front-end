import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "./service/login.service";
import { Route, Router } from "@angular/router";
import { TokenService } from "src/app/services/token.service";

export interface User {
  login: string;
  password: string;
}

export interface UserLogged {
  isLogged: boolean;
  isAdmin: boolean;
  idPartner?: number;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _token: TokenService
  ) {}
  user: User = {
    login: "",
    password: ""
  };
  $auth: Subscription;
  showError: boolean;
  ngOnInit(): void {
    const token = this._token.getToken();
    if (token?.isLogged) this.redirectUser(token);
  }

  public postLogin(user: User) {
    this.showError = false;
    this.$auth = this._loginService
      .postLogin(user)
      .subscribe((userLogged: UserLogged) => {
        if (!userLogged.isLogged) {
          this.showError = true;
          return;
        }

        this.redirectUser(userLogged);
        if (userLogged?.idPartner) {
          this._token.setToken(
            userLogged.isLogged,
            userLogged.isAdmin,
            userLogged.idPartner
          );
          return;
        }
        this._token.setToken(userLogged.isLogged, userLogged.isAdmin);
      });
  }

  private redirectUser(userLogged: UserLogged) {
    console.log(userLogged);
    if (userLogged.isAdmin) {
      this._router.navigate(["/dashboard/cliente"]);
      return;
    }
    this._router.navigate(["/dashboard"]);
  }

  ngOnDestroy() {
    if (this.$auth) this.$auth.unsubscribe();
  }
}
