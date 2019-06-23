import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from '../modules/moduleData.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modulesList = this.moduleDataService.getModuleLibrary();

  constructor(private moduleDataService: ModuleDataService) {}

  ngOnInit() {
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const module of this.modulesList) {
      module.hide = !(module.title.toLowerCase().search(searchTerm) > -1);
  }
}
}
