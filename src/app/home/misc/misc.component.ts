import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
})
export class MiscComponent implements OnInit {
  @Input() weight: number;

  constructor() { }

  ngOnInit() {}

}
