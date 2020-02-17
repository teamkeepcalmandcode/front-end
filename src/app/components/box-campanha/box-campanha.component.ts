import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-box-campanha",
  templateUrl: "./box-campanha.component.html",
  styleUrls: ["./box-campanha.component.scss"]
})
export class BoxCampanhaComponent implements OnInit {
  @Input()
  nomeCampanha: string;
  @Input()
  pontosGlobo: string;
  @Input()
  cupomDesconto: boolean;
  @Input()
  imagemCampanha: string;
  constructor() {}

  ngOnInit(): void {}

  desconto() {}
}
