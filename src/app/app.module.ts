import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { HeaderComponent } from "./components/header/header.component";
import { BoxProfileComponent } from "./components/box-profile/box-profile.component";
import { BoxCampanhaComponent } from "./components/box-campanha/box-campanha.component";
import { GerarBipComponent } from "./views/gerar-bip/gerar-bip.component";
import { BoxCampanhaAdComponent } from "./components/box-campanha-ad/box-campanha-ad.component";
import { BoxCampanhaAdDetalhesComponent } from "./components/box-campanha-ad-detalhes/box-campanha-ad-detalhes.component";
import { RelatorioCampanhaComponent } from "./views/relatorio-campanha/relatorio-campanha.component";
import { GraficoCidadeComponent } from "./components/grafico-cidade/grafico-cidade.component";
import { GoogleChartsModule } from "angular-google-charts";
import { ChartsModule } from "ng2-charts";
import { GraficoHoraComponent } from './components/grafico-hora/grafico-hora.component';
import { GraficoCidadeEscolhaComponent } from './components/grafico-cidade-escolha/grafico-cidade-escolha.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputFieldComponent,
    ButtonComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    HeaderComponent,
    BoxProfileComponent,
    BoxCampanhaComponent,
    GerarBipComponent,
    BoxCampanhaAdComponent,
    BoxCampanhaAdDetalhesComponent,
    RelatorioCampanhaComponent,
    GraficoCidadeComponent,
    GraficoHoraComponent,
    GraficoCidadeEscolhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    ChartsModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
