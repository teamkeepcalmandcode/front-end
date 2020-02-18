import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class RelatorioService {
  constructor(private _http: HttpClient) {}

  getRelatorio(id: number) {
    return this._http.get(`${environment.api}/feedbacks/report/${id}`);
  }
}
