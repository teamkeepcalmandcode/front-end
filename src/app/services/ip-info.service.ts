import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class IpInfoService {
  constructor(private _http: HttpClient) {}

  getIpInfo() {
    return this._http.get(`https://ipinfo.io?token=e8cbcd06125f56`);
  }

  campanha() {
    return this._http.get(`${environment.api}/feedbacks/report/2`);
  }
}
