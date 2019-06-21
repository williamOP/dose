import { Component, OnInit } from '@angular/core';
import { moduleLibrary } from '../modules/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modulesList = moduleLibrary;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const module of this.modulesList) {
      module.hide = !(module.title.toLowerCase().search(searchTerm) > -1);
  }
}
}
