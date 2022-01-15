import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  @Input() type: string = '';
  @Input() countries = new Set();
  dataURL: string = 'http://universities.hipolabs.com/search';
  data: Object = {};

  constructor() {}

  ngOnInit(): void {
    if (this.type == 'country') this.fetchCountryData();
  }

  async fetchCountryData() {
    const testData = await fetch(this.dataURL);
    const response = await testData.json();
    this.data = response;

    response.forEach((element: any) => {
      this.countries.add(element[this.type]);
    });
    console.log(this.countries);
    
  }
}
