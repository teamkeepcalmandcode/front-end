import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "../services/login/login.service";

export interface User {
  login: string;
  password: string;
}

export interface UserError {
  isLogged: boolean;
  isAdmin: boolean;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService) {}
  user: User = {
    login: "",
    password: ""
  };
  $auth: Subscription;
  showError: boolean;
  ngOnInit(): void {}

  public postLogin(user: User) {
    this.showError = false;
    this.$auth = this.loginService
      .postLogin(user)
      .subscribe((userLogged: UserError) => {
        if (!userLogged.isLogged) {
          this.showError = true;
        }
      });
  }

  ngOnDestroy() {
    this.$auth.unsubscribe();
  }
}
