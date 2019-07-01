import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-footer',
  templateUrl: './result-footer.component.html',
  styleUrls: ['./result-footer.component.scss'],
})
export class ResultFooterComponent implements OnInit {
  @Input() resultTitle: string;
  @Input() resultDescription: string;

  showResultDescription = false;

  constructor() { }

  ngOnInit() {}

}
