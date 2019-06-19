import { Component, OnInit } from '@angular/core';
import { moduleLibrary, ModuleData } from '../modules/moduleLibrary';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modulesList: ModuleData[] = [];

  constructor() {}

  ngOnInit() {
    for (const moduleData of moduleLibrary.values()) {
      this.modulesList.push(moduleData);
    }
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const module of this.modulesList) {
      if (module.title.toLowerCase().search(searchTerm) > -1) {
        module.hide = false;
      } else {
        module.hide = true;
      }
    }
  }

}

// this.title = moduleLibrary.get('anaesthetics').title;