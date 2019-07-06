import { Component, OnInit, DoCheck } from '@angular/core';
import { Module } from '../module';
import anime from 'animejs/lib/anime.es.js';
import { Index } from '.';

interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-periodontal-recall',
  templateUrl: './periodontal-recall.page.html',
  styleUrls: ['./periodontal-recall.page.scss'],
})
export class PeriodontalRecallPage extends Module implements OnInit, DoCheck {
  // Graph values
  originCoordinate = {x: 180, y: 210};
  indexDistance = 30;
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
  bopIndex = new Index([4, 9, 16, 25, 36]);
  ppdIndex = new Index([2, 4, 6, 8, 10]);
  toothLossIndex = new Index([2, 4, 6, 8, 10]);
  boneLossIndex = new Index([0.25, 0.5, 0.75, 1.0, 1.25]);
  systGenIndex = new Index(['No factors', 'NA', 'NA', 'NA', 'Systemic factors']);
  environmentIndex = new Index(['Non-smoker', 'Former smoker', 'Occasional smoker', 'Smoker', 'Heavy smoker']);
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

    // Update risk and graph if an index has changed
    if (this.bopIndex.setIndexByValue(this.bopPercentage) ||
      this.ppdIndex.setIndexByValue(this.deepPocketPercentage) ||
      this.toothLossIndex.setIndexByValue(this.teethLost) ||
      this.boneLossIndex.setIndexByValue(this.boneLossForAge) ||
      this.systGenIndex.setIndexByValue(this.systGenFactors) ||
      this.environmentIndex.setIndexByValue(this.smokingStatus)) {
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

  // Animate a dot for a value
  async animatePoint(target: string, coordinate: Coordinate, strokeColor: string, fillColor: string, index: number, value) {
    const animation = anime.timeline({
      easing: 'easeOutQuad',
      duration: 250
    });

    // shrink text-holder, move text-holder and dot
    animation.add({
      targets: '.' + target + '.text-holder, ' + '.' + target + '.dot',
      stroke: strokeColor,
      fill: fillColor,
      x: coordinate.x - 1.5,
      y: coordinate.y - 1.5,
      width: 3,
      height: 3,
      easing: 'easeOutQuad',
    });
    // Hide and move text
    animation.add({
      targets: '.' + target + '.text',
      opacity: 0,
      x: coordinate.x + 8,
      y: coordinate.y + 4,
    }, 0);


    // expand text-holder
    if (index > 2) {
      setTimeout(() => {
        const textItem = document.getElementById(target) as unknown as SVGGraphicsElement;
        const textWidth = textItem.getBBox().width;
        animation.add({
          targets: '.' + target + '.text-holder',
          width: textWidth + 25,
          height: 16,
          x: coordinate.x - 8,
          y: coordinate.y - 8,
        });

      // Show text
        animation.add({
          targets: '.' + target + '.text',
          opacity: 1,
        });
      });
    }
  }

  // Use to work out where points of the graph need to be
  rotateCoordinate(origin: Coordinate, distance: number, degrees: number): Coordinate {
    const radians = -degrees * (Math.PI / 180);
    const newX = +(0 * Math.cos(radians) - distance * Math.sin(radians)).toFixed(6);
    const newY = +(0 * Math.sin(radians) + distance * Math.cos(radians)).toFixed(6);
    return {x: origin.x + newX, y: origin.y - newY};
  }

  async updateGraph() {
    // Evaluate required coordinates
    const bopCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.bopIndex.currentIndex, 0);
    const ppdCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.ppdIndex.currentIndex, 60);
    const toothLossCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.toothLossIndex.currentIndex, 120);
    const boneLossCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.boneLossIndex.currentIndex, 180);
    const systGenCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.systGenIndex.currentIndex, 240);
    const environmentCoordinate: Coordinate =
    this.rotateCoordinate(this.originCoordinate, this.indexDistance * this.environmentIndex.currentIndex, 300);

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
        { value: bopCoordinate.x + ',' + bopCoordinate.y + ' ' +
        ppdCoordinate.x + ',' + ppdCoordinate.y + ' ' +
        toothLossCoordinate.x + ',' + toothLossCoordinate.y + ' ' +
        boneLossCoordinate.x + ',' + boneLossCoordinate.y + ' ' +
        systGenCoordinate.x + ',' + systGenCoordinate.y + ' ' +
        environmentCoordinate.x + ',' + environmentCoordinate.y},
      easing: 'easeOutQuad',
      duration: 100
    });

    // Animate points
    this.animatePoint('bop', bopCoordinate, strokeColor, fillColor, this.bopIndex.currentIndex, this.bopPercentage);
    this.animatePoint('ppd', ppdCoordinate, strokeColor, fillColor, this.ppdIndex.currentIndex, this.deepPocketPercentage);
    this.animatePoint('tooth-loss', toothLossCoordinate, strokeColor, fillColor, this.toothLossIndex.currentIndex, this.teethLost);
    this.animatePoint('bone-loss', boneLossCoordinate, strokeColor, fillColor, this.boneLossIndex.currentIndex, this.boneLossForAge);
    this.animatePoint('syst-gen', systGenCoordinate, strokeColor, fillColor, this.systGenIndex.currentIndex, this.systGenFactors);
    this.animatePoint('environment', environmentCoordinate, strokeColor, fillColor, this.environmentIndex.currentIndex, this.smokingStatus);
  }
}
