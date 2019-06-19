import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Drug } from './data';
import { ageWeight } from './age-weight';

@Component({
  selector: 'app-anaesthetics',
  templateUrl: 'anaesthetics.page.html',
  styleUrls: ['anaesthetics.page.scss'],
})

export class AnaestheticsPage implements OnInit {
  drugList: Drug[];

  // default inputs
  inputs = {
    weight: 70,
    carpule: 2.2,
    age: null,
    gender: null
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.drugList = this.dataService.getDrug();
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const drug of this.drugList) {
      if (drug.name.toLowerCase().search(searchTerm) > -1) {
        drug.hide = false;
      } else {
        drug.hide = true;
      }
    }
  }

  updateWeight(evt: any) {
    if (evt.srcElement.innerText === 'Gender') {
      this.inputs.gender = evt.srcElement.value;
    }

    if (this.inputs.age > -1) {
      for (const ageForWeight of ageWeight) {
          if (Math.floor(this.inputs.age) === ageForWeight.age) {
            if (this.inputs.gender === 'male' && ageForWeight.male) {
              this.inputs.weight = ageForWeight.weight;
            } else if (this.inputs.gender === 'female' && !ageForWeight.male) {
              this.inputs.weight = ageForWeight.weight;
            }
          }
      }
    }
  }

  clearAgeWeight() {
    this.inputs.age = null;
    // this.gender = null;
  }

}
