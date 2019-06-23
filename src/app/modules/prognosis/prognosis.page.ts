import { Component, OnInit } from '@angular/core';
import { Module } from '../module';
import { ToothPrognosisService } from 'src/app/dataServices/tooth-prognosis.service';

@Component({
  selector: 'app-prognosis',
  templateUrl: './prognosis.page.html',
  styleUrls: ['./prognosis.page.scss'],
})

export class PrognosisPage extends Module implements OnInit {
  prognosisList = this.toothPrognosisService.getToothPrognosisList();
  classScores = {};
  formComplete = false;
  lowestScore: string;

  constructor(private toothPrognosisService: ToothPrognosisService) {
    super('prognosis');
  }

  ngOnInit() {
    for (const prognosis of this.prognosisList) {
      this.classScores[prognosis.category] = '';
    }
  }

  radioChange() {
    if (Object.values(this.classScores).filter(classScore => classScore === '').length === 0) {
      const scores: string[] = Object.values(this.classScores);
      this.lowestScore = (scores.sort().reverse()[0]);
      this.displayedResult = 'Prognosis: ' + this.lowestScore;
      this.displayedResultDescription = this.toothPrognosisService.getPrognosisInterpretation(this.lowestScore);
    }

  }
}
