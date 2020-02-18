import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
export interface UserToken {
  isLogged: boolean;
  isAdmin: boolean;
  idPartner?: number;
}
@Injectable({
  providedIn: "root"
})
export class TokenService {
  public $removeToken: Subject<boolean> = new Subject();
  public $addToken: Subject<boolean> = new Subject();
  constructor(private _router: Router) {}

  getToken = (): UserToken => {
    return JSON.parse(localStorage.getItem("token"));
  };

  setToken = (isLogged, isAdmin, idPartner = null) => {
    localStorage.setItem(
      "token",
      JSON.stringify({
        isLogged: isLogged,
        isAdmin: isAdmin,
        idPartner: idPartner
      })
    );
    this.$addToken.next(true);
  };

  removeToken = () => {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
    this.$removeToken.next(true);
  };
}
