import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css'],
})
export class InfocardComponent implements OnInit {
  @Input() universityInfo = {
    country: '',
    domains: [''],
    name: '',
    'state-province': '',
    web_pages: [''],
    alpha_two_code: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
