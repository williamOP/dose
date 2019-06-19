import { Injectable } from '@angular/core';
import { drugList } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDrug() {
    return drugList;
  }
}
