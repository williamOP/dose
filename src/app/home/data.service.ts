import { Injectable } from '@angular/core';
import { laList, analgesicList, miscList } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getLa() {
    return laList;
  }

  getAnalgesic() {
    return analgesicList;
  }

  getMisc() {
    return miscList;
  }
}
