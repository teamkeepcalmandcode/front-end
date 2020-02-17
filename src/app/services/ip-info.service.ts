import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class IpInfoService {
  constructor(private http: HttpClient) {}

  getIpInfo() {
    return this.http.get(`https://ipinfo.io?token=e8cbcd06125f56`);
  }
}
