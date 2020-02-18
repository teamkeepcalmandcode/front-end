import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-box-campanha-ad",
  templateUrl: "./box-campanha-ad.component.html",
  styleUrls: ["./box-campanha-ad.component.scss"]
})
export class BoxCampanhaAdComponent implements OnInit {
  @Input()
  nome: string;
  @Input()
  nivel: string;
  @Input()
  bgCliente: string;
  @Input()
  imgProfile: string;
  @Input()
  bipsConquistados: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log(this.bgCliente, this.imgProfile);
  }
}
