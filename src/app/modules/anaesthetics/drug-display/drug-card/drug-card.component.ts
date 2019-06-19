import { Component, OnInit, Input } from '@angular/core';
import { Drug, drugList } from '../../data';

@Component({
  selector: 'app-drug-card',
  templateUrl: './drug-card.component.html',
  styleUrls: ['./drug-card.component.scss'],
})
export class DrugCardComponent implements OnInit {
  @Input() inputs;
  @Input() drug: Drug;

  constructor() { }

  ngOnInit() {}
}
