import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  
  @Input() type: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  fetchData(){
    console.log(this.type);
  }

}
