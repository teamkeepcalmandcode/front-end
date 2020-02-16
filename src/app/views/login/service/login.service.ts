import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  public postLogin(user) {
    return this._http.post(`${environment.api}/users/login`, { ...user });
  }
}
