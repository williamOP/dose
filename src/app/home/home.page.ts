import { Component } from '@angular/core';
import { DataService } from './data.service';
import { La, Analgesic } from './data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  laList: La[];
  analgesicList: Analgesic[];

  weight = 70;
  carpule = 2.2;

  constructor(private dataService: DataService) {}

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.laList = this.dataService.getLa();
    this.analgesicList = this.dataService.getAnalgesic();
  }

}
