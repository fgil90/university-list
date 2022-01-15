import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  @Input() type: string = '';
  @Input() options = new Set();
  @Input() update = (str: string) => {};

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.update(event.target.value);
  }
}
