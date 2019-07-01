import { Component, OnInit, DoCheck } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-periodontitis-classification',
  templateUrl: './periodontitis-classification.page.html',
  styleUrls: ['./periodontitis-classification.page.scss'],
})
export class PeriodontitisClassificationPage extends Module implements OnInit, DoCheck {
  calOrBoneLoss: string;
  toothLoss: string;
  maximumProbingDepth: string;
  boneLossPattern: string;
  furcationInvolvement: string;
  ridgeDefect: string;
  complexRehab: string;

  progressionRate: string;
  casePhenotype: string;
  smoking: string;
  diabetes: string;

  distribution = '';
  stage = '';
  grade = '';

  constructor() {
    super('periodontitis-classification');
  }

  ngOnInit() {
  }

  ngDoCheck() {
    // Staging check
    if (this.toothLoss === '5+' || this.complexRehab === 'yes' ||
    this.ridgeDefect === 'severe') {
      this.stage = 'Stage IV ';
    } else if (this.toothLoss === '1-4' || this.calOrBoneLoss === '5+mm' ||
    this.calOrBoneLoss === '34+%' || this.maximumProbingDepth === '6+' ||
    this.boneLossPattern === 'vertical' || this.furcationInvolvement === 'yes' ||
    this.ridgeDefect === 'moderate') {
      this.stage = 'Stage III ';
    } else if (this.calOrBoneLoss === '3-4mm' || this.calOrBoneLoss === '15-33%' ||
    this.maximumProbingDepth === '5-') {
      this.stage = 'Stage II ';
    } else if (this.calOrBoneLoss === '1-2mm' || this.calOrBoneLoss === '15-%') {
      this.stage = 'Stage I ';
    } else {
      this.stage = '';
    }
    // Grading check
    if (this.progressionRate === '2+mm' || this.progressionRate === '1+%' ||
    this.casePhenotype === 'exceeds' || this.smoking === '10+' ||
    this.diabetes === '7+') {
      this.grade = 'Grade C';
    } else if (this.progressionRate === '2-mm' || this.progressionRate === '0.25-1%' ||
    this.casePhenotype === 'commensurate' || this.smoking === '10-' ||
    this.diabetes === '7-') {
      this.grade = 'Grade B';
    } else if (this.progressionRate === 'no loss' || this.progressionRate === '0.25-%' ||
    this.casePhenotype === 'below') {
      this.grade = 'Grade A';
    } else {
      this.grade = '';
    }
    this.displayedResult = this.distribution + this.stage + this.grade;
  }
}
