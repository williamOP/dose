import { Component, OnInit, Input } from '@angular/core';
import { Misc } from '../data';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  @Input() miscItem: Misc;
  @Input() weight: number;
  @Input() carpule: number;

  constructor() { }

  ngOnInit() {}

}
