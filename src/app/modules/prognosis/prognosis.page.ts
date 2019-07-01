import { Component, OnInit, ViewChild } from '@angular/core';
import { Module } from '../module';
import { ToothPrognosisService } from 'src/app/dataServices/tooth-prognosis.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-prognosis',
  templateUrl: './prognosis.page.html',
  styleUrls: ['./prognosis.page.scss'],
})

export class PrognosisPage extends Module implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  prognosisList = this.toothPrognosisService.getToothPrognosisList();
  classScores = {};

  constructor(private toothPrognosisService: ToothPrognosisService) {
    super('prognosis');
  }

  ngOnInit() {
    for (const prognosis of this.prognosisList) {
      this.classScores[prognosis.category] = '';
    }
  }

  radioChange(id: string) {
    if (Object.values(this.classScores).filter(classScore => classScore === '').length === 0) {
      const scores: string[] = Object.values(this.classScores);
      const lowestScore = (scores.sort().reverse()[0]);
      this.displayedResult = 'Prognosis: ' + lowestScore;
      this.displayedResultDescription = this.toothPrognosisService.getPrognosisInterpretation(lowestScore);
    }
    if (document.getElementById(id + 1)) {
      this.content.scrollToPoint(null, document.getElementById(id + 1).offsetTop, 500);
    }
  }
}
