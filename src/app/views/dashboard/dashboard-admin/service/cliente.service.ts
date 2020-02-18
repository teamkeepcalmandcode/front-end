import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campanha } from "../index";
import { environment } from "src/environments/environment";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  constructor(private _http: HttpClient) {}

  getCampanha(id: number) {
    return this._http.get<Campanha[]>(
      `${environment.api}/campaigns?partner=${id}`
    );
  }

  getNomeCliente(id: number) {
    return this._http.get<any>(`${environment.api}/partners`);
  }
}
