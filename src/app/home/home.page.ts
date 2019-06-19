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

}

// this.title = moduleLibrary.get('anaesthetics').title;