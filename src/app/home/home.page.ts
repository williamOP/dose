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
  laListAll: La[];
  analgesicList: Analgesic[];
  analgesicListAll: Analgesic[];
  dataList: any[];
  loadedDataList: any[];

  weight = 70;
  carpule = 2.2;
  i = 0;
  j = 0;

  constructor(private dataService: DataService) {}

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    // list of all LA
    this.laListAll = this.dataService.getLa();
    // filtered list of LA
    this.laList = this.laListAll;
    this.analgesicListAll = this.dataService.getAnalgesic();
    this.analgesicList = this.analgesicListAll;

    // list of names of drugs
    this.dataList = [];
    this.loadedDataList = [];

    while (this.laList[this.i]) {
      this.dataList.push(this.laList[this.i].laName);
      this.i++;
    }
    while (this.analgesicList[this.j]) {
      this.dataList.push(this.analgesicList[this.j].analgesicName);
      this.j++;
    }
  }

  initialiseItems(): void {
    // initialises the lists
    this.dataList = this.loadedDataList;
    this.laList = this.laListAll;
    this.analgesicList = this.analgesicListAll;
  }

  filterList(evt: any) {
    this.initialiseItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.laList = this.laList.filter(currentLa => {
      if (currentLa.laName && searchTerm) {
        if (currentLa.laName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        // continue
      }
    });

    this.analgesicList = this.analgesicList.filter(currentAnalgesic => {
      if (currentAnalgesic.analgesicName && searchTerm) {
        if (currentAnalgesic.analgesicName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    // this.dataList = this.dataList.filter(currentData => {
    //   if (currentData && searchTerm) {
    //     if (currentData.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
    //       return true;
    //     }
    //     return false;
    //   }
    // });
  }

}
