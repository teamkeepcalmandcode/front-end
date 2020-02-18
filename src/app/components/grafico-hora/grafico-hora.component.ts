import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grafico-hora",
  templateUrl: "./grafico-hora.component.html",
  styleUrls: ["./grafico-hora.component.scss"]
})
export class GraficoHoraComponent implements OnInit {
  @Input()
  dadosGrafico: any;
  options = {
    chartArea: { width: "80%", height: "80%" },
    pieSliceText: "value"
  };
  constructor() {}

  ngOnInit(): void {}
}
