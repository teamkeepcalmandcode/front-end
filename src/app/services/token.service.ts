import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
export interface UserToken {
  isLogged: boolean;
  isAdmin: boolean;
}
@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private _router: Router) {}

  getToken = (): UserToken => {
    return JSON.parse(localStorage.getItem("token"));
  };

  setToken = (isLogged, isAdmin) => {
    localStorage.setItem(
      "token",
      JSON.stringify({ isLogged: isLogged, isAdmin: isAdmin })
    );
  };

  removeToken = () => {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  };
}
