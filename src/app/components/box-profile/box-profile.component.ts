import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-box-profile",
  templateUrl: "./box-profile.component.html",
  styleUrls: ["./box-profile.component.scss"]
})
export class BoxProfileComponent implements OnInit {
  @Input()
  nome: string;
  @Input()
  nivel: string;
  constructor() {}

  ngOnInit(): void {}
}
