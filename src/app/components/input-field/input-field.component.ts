import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
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
  constructor() {}

  ngOnInit(): void {}
}
