import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  dataURL: string = 'http://universities.hipolabs.com/search';
  data: any[] = [];
  countries = new Set();
  universities:any = new Set();
  selectedCountry: string = '';
  selectedUniversity: string = '';

  constructor() {
    this.setCountry = this.setCountry.bind(this);
  }

  ngOnInit(): void {}

  setCountry(country:string){
    this.selectedCountry = country;
    this.data.forEach(({country, name})=>{
      if (country == this.selectedCountry){
        this.universities.add(name)
      }
    })
  }

  async fetchCountryData() {
    const testData = await fetch(this.dataURL);
    const response = await testData.json();
    this.data = response;

    this.data.forEach((element: any) => {
      this.countries.add(element.country);
    });
  }
}
