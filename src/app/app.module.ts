import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { LoginComponent } from "./views/login/login.component";
import { InputFieldComponent } from "./components/input-field/input-field.component";
import { ButtonComponent } from "./components/button/button.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DashboardUserComponent } from "./views/dashboard/dashboard-user/dashboard-user.component";
import { DashboardAdminComponent } from "./views/dashboard/dashboard-admin/dashboard-admin.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputFieldComponent,
    ButtonComponent,
    DashboardUserComponent,
    DashboardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
