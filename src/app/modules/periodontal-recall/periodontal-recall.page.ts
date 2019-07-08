import { Component, OnInit, DoCheck } from '@angular/core';
import { Module } from '../module';
import anime from 'animejs/lib/anime.es.js';
import { Index } from '.';

@Component({
  selector: 'app-periodontal-recall',
  templateUrl: './periodontal-recall.page.html',
  styleUrls: ['./periodontal-recall.page.scss'],
})
export class PeriodontalRecallPage extends Module implements OnInit, DoCheck {
  // Graph values
  originCoordinate = {x: 180, y: 210};    // Centre of graph
  indexDistance = 30;                     // Distance between lines of graph
  lowRiskStroke = '#71a667';
  lowRiskFill = '#8ED081';
  moderateRiskStroke = '#b37f31';
  moderateRiskFill = '#e3a951';
  highRiskStroke = '#933f2a';
  highRiskFill = '#B84F35';
  // Patient values
  patientAge = 20;
  totalTeeth = 28;
  sitesPerTooth = '6';
  totalSites: number;
  // Intermediate values
  boneLoss = 0;
  bopSites = 0;
  deepPockets = 0;
  // Result values
  bopPercentage: number;
  deepPocketPercentage: number;
  boneLossForAge: number;
  teethLost = 0;
  systGenFactors = 'No factors';
  smokingStatus = 'Non-smoker';
  // Indices
  bopIndex = new Index([4, 9, 16, 25, 36], 0, 'bop');
  ppdIndex = new Index([2, 4, 6, 8, 10], 60, 'ppd');
  toothLossIndex = new Index([2, 4, 6, 8, 10], 120, 'tooth-loss');
  boneLossIndex = new Index([0.25, 0.5, 0.75, 1.0, 1.25], 180, 'bone-loss');
  systGenIndex = new Index(['No factors', 'NA', 'NA', 'NA', 'Systemic factors'], 240, 'syst-gen');
  environmentIndex = new Index(['Non-smoker', 'Former smoker', 'Occasional smoker', 'Smoker', 'Heavy smoker'], 300, 'environment');

  indices: Index[] = [this.bopIndex, this.ppdIndex, this.toothLossIndex,
    this.boneLossIndex, this.systGenIndex, this.environmentIndex];
  // Risk
  risk: string;

  constructor() {
    super('periodontal-recall');
  }

  ngOnInit() {
    this.updateDentalData();
  }

  ngDoCheck() {
    // Evaluate result values
    this.bopPercentage = 100 * this.bopSites / this.totalSites;
    this.deepPocketPercentage = 100 *  this.deepPockets / this.totalSites;
    this.boneLossForAge = this.boneLoss / this.patientAge;

    // Evaluate indices and update risk/graph if any have changed
    if (this.bopIndex.setValue(this.bopPercentage) ||
      this.ppdIndex.setValue(this.deepPocketPercentage) ||
      this.toothLossIndex.setValue(this.teethLost) ||
      this.boneLossIndex.setValue(this.boneLossForAge) ||
      this.systGenIndex.setValue(this.systGenFactors) ||
      this.environmentIndex.setValue(this.smokingStatus)) {
        this.evaluateRisk();
        this.updateGraph();
    }
  }

  // Update total sites and teeth lost
  updateDentalData() {
    this.totalSites = this.totalTeeth * +this.sitesPerTooth;
    this.teethLost = 28 - this.totalTeeth;
    if (this.teethLost < 0) {
      this.teethLost = 0;
    }
  }

  // Determine if low, moderate, or high risk by counting number of moderate and high risk values
  evaluateRisk(): void {
    const indices: number[] = [this.bopIndex.currentIndex, this.ppdIndex.currentIndex,
      this.toothLossIndex.currentIndex, this.boneLossIndex.currentIndex,
      this.systGenIndex.currentIndex, this.environmentIndex.currentIndex];

    const moderateRiskIndicesCount = indices.filter(index => index > 2 && index <= 4).length;
    const highRiskIndicesCount = indices.filter(index => index > 4).length;

    if (moderateRiskIndicesCount <= 1 && highRiskIndicesCount === 0) {
      this.risk = 'low';
      setTimeout(() => this.displayedResult = 'Low risk: 12 month recall');
    } else if (highRiskIndicesCount <= 1) {
      this.risk = 'moderate';
      setTimeout(() => this.displayedResult = 'Moderate risk: 6 month recall');
    } else {
      this.risk = 'high';
      setTimeout(() => this.displayedResult = 'High risk: 3 month recall');
    }
  }

  async updateGraph() {
    // Evaluate required coordinates
    for (const index of this.indices) {
      index.coordinate = index.rotateCoordinate(this.originCoordinate, this.indexDistance * index.currentIndex);
    }

    // Evaluate colour based on risk
    let fillColor: string;
    let strokeColor: string;
    if (this.risk === 'low') {
      strokeColor = this.lowRiskStroke;
      fillColor = this.lowRiskFill;
    } else if (this.risk === 'moderate') {
      strokeColor = this.moderateRiskStroke;
      fillColor = this.moderateRiskFill;
    } else if (this.risk === 'high') {
      strokeColor = this.highRiskStroke;
      fillColor = this.highRiskFill;
    }
    // Draw graph
    anime({
      targets: '.status',
      stroke: strokeColor,
      fill: fillColor,
      points:
        { value: this.indices[0].coordinate.x + ',' + this.indices[0].coordinate.y + ' ' +
        this.indices[1].coordinate.x + ',' + this.indices[1].coordinate.y + ' ' +
        this.indices[2].coordinate.x + ',' + this.indices[2].coordinate.y + ' ' +
        this.indices[3].coordinate.x + ',' + this.indices[3].coordinate.y + ' ' +
        this.indices[4].coordinate.x + ',' + this.indices[4].coordinate.y + ' ' +
        this.indices[5].coordinate.x + ',' + this.indices[5].coordinate.y},
      easing: 'easeOutQuad',
      duration: 250
    });

    // Animate points
    for (const index of this.indices) {
      index.animatePoint(strokeColor, fillColor);
    }
  }
}
