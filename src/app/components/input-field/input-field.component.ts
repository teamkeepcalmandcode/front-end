import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"]
})
export class InputFieldComponent implements OnInit {
  @Input()
  placeholder: string;
  @Input()
  type: string;
  @Input()
  login = false;
  @Input()
  icon: string;
  @Input()
  model: string;
  @Output()
  changeModel: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
