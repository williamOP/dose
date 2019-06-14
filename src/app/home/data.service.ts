import { Injectable } from '@angular/core';
import { laList, analgesicList } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllData() {
    this.getLa();
    this.getAnalgesic();
  }

  getLa() {
    return laList;
  }

  getAnalgesic() {
    return analgesicList;
  }
}
