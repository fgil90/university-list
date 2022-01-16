import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  dataURL: string = 'http://universities.hipolabs.com/search';
  data: any[] = [];
  countries = new Set();
  universities: any = new Set();
  selectedCountry: string = '';
  selectedUniversity: string = '';

  universityInfo = {
    country: '',
    domains: ['',''],
    name: '',
    'state-province': '',
    web_pages: [''],
    alpha_two_code: '',
  };

  constructor() {
    this.setCountry = this.setCountry.bind(this);
    this.setUniversity = this.setUniversity.bind(this);
  }

  ngOnInit(): void {}

  setCountry(country: string) {
    this.selectedCountry = country;
    this.universities.clear();
    this.populateUniversityList();
  }

  setUniversity(university: string) {
    this.selectedUniversity = university;
    this.updateCardInfo(this.selectedUniversity);
  }

  populateUniversityList() {
    this.data.forEach(({ country, name }) => {
      if (country == this.selectedCountry) {
        this.universities.add(name);
      }
    });
  }

  updateCardInfo(university:string){
    this.data.forEach((object) => {
      if (object.name == this.selectedUniversity){
        this.universityInfo = object;
        console.log(this.universityInfo);
      }
    });
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
