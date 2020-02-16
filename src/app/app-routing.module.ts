import { NgModule, Injectable } from "@angular/core";
import {
  Routes,
  RouterModule,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { LoginComponent } from "./views/login/login.component";
import { DashboardUserComponent } from "./views/dashboard/dashboard-user/dashboard-user.component";
import { DashboardAdminComponent } from "./views/dashboard/dashboard-admin/dashboard-admin.component";
import { Observable } from "rxjs";
import { TokenService } from "./services/token.service";

@Injectable()
class isLoggedUser implements CanActivate {
  constructor(private _router: Router, private _token: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this._token.getToken();
    if (!token || !token.isLogged || token.isAdmin)
      return this._router.navigate(["/login"]);
    return token.isLogged && !token.isAdmin;
  }
}

@Injectable()
class isLoggedAdmin implements CanActivate {
  constructor(private _router: Router, private _token: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this._token.getToken();
    if (!token || !token.isLogged) return this._router.navigate(["/login"]);
    return token.isLogged && token.isAdmin;
  }
}

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    children: [
      {
        path: "",
        component: DashboardUserComponent,
        canActivate: [isLoggedUser]
      },
      {
        path: "cliente",
        component: DashboardAdminComponent,
        canActivate: [isLoggedAdmin]
      }
    ]
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [isLoggedUser, isLoggedAdmin]
})
export class AppRoutingModule {}
