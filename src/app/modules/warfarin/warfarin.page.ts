import { Component, OnInit } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-warfarin',
  templateUrl: './warfarin.page.html',
  styleUrls: ['./warfarin.page.scss'],
})
export class WarfarinPage extends Module implements OnInit {
  inr: number;

  constructor() {
    super('warfarin');
  }

  updateInr() {
    if (this.inr < 2.2) {
      this.displayedResult = 'Proceed';
      this.displayedResultDescription = `If there are no contraindications, proceed with surgery;
      tranexamic acid mouthwash is not required.`;
    } else if (this.inr <= 4) {
      this.displayedResult = 'Proceed with tranexamic acid';
      this.displayedResultDescription = `Proceed with surgery using the tranexamic mouthwash protocol.`;
    } else if (this.inr > 4) {
      this.displayedResult = 'Do not proceed';
      this.displayedResultDescription = `Do not proceed with surgery and refer the patient to their medical practitioner.`;
    }
  }

  ngOnInit() {
  }

}
