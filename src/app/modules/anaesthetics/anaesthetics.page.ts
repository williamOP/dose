import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Drug } from './data';
import { getWeight } from './age-weight';
import { Module, getModuleMetadata } from '../module';

@Component({
  selector: 'app-anaesthetics',
  templateUrl: 'anaesthetics.page.html',
  styleUrls: ['anaesthetics.page.scss'],
})

export class AnaestheticsPage extends Module implements OnInit {
  title: string;
  drugList: Drug[];

  // default inputs
  inputs = {
    weight: 70,
    carpule: 2.2,
    age: null,
    gender: null
  };

  constructor(private dataService: DataService) {
    super();
  }

  ngOnInit() {
    this.metadata = getModuleMetadata('anaesthetics');
    this.drugList = this.dataService.getDrug();
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const drug of this.drugList) {
      drug.hide = !(drug.name.toLowerCase().search(searchTerm) > -1);
    }
  }

  updateWeight(evt: any) {
    if (this.inputs.age && this.inputs.gender) {
      this.inputs.weight = getWeight(this.inputs.gender, this.inputs.age);
    }
  }
}
