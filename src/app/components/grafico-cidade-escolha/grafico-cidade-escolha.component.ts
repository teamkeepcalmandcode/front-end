import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-cidade-escolha',
  templateUrl: './grafico-cidade-escolha.component.html',
  styleUrls: ['./grafico-cidade-escolha.component.scss']
})
export class GraficoCidadeEscolhaComponent implements OnInit {
  @Input()
  dadosGrafico: any;
  @Input()
  number: any;
  @Input()
  tituloGrafico: string;
  options = {
    chartArea: { width: "100%", height: "95%", left: 20 },
    pieSliceText: "value"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
