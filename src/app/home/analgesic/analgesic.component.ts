import { Component, OnInit, Input } from '@angular/core';
import { Analgesic } from '../data';

@Component({
  selector: 'app-analgesic',
  templateUrl: './analgesic.component.html',
  styleUrls: ['./analgesic.component.scss'],
})
export class AnalgesicComponent implements OnInit {
  @Input() analgesicItem: Analgesic;
  @Input() weight: number;
  @Input() carpule: number;

  constructor() { }

  ngOnInit() {}

}
