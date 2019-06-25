import { Injectable } from '@angular/core';
import { drugList, Drug } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDrug(): Drug[] {
    return drugList;
  }
}
