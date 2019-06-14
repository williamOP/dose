import { Component, OnInit, Input } from '@angular/core';
import { La } from '../data';

@Component({
  selector: 'app-la',
  templateUrl: './la.component.html',
  styleUrls: ['./la.component.scss'],
})
export class LaComponent implements OnInit {
  @Input() laItem: La;
  @Input() weight: number;
  @Input() carpule: number;

  constructor() { }

  ngOnInit() {}

}
