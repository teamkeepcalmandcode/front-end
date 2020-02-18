import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grafico-cidade",
  templateUrl: "./grafico-cidade.component.html",
  styleUrls: ["./grafico-cidade.component.scss"]
})
export class GraficoCidadeComponent implements OnInit {
  @Input()
  dadosGrafico: any;
  options = {
    chartArea: { width: "100%", height: "95%", left: 20 },
    pieSliceText: "value"
  };
  constructor() {}

  ngOnInit(): void {}
}
