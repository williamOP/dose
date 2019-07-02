import { Component, OnInit, Input, ViewChild, ElementRef, DoCheck } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-result-footer',
  templateUrl: './result-footer.component.html',
  styleUrls: ['./result-footer.component.scss'],
})
export class ResultFooterComponent implements OnInit, DoCheck {
  @Input() resultTitle: string;
  @Input() resultDescription: string;

  @ViewChild('title', {read: ElementRef}) title: ElementRef;
  @ViewChild('description', {read: ElementRef}) description: ElementRef;
  @ViewChild('content', {read: ElementRef}) content: ElementRef;

  showResultDescription = false;
  currentHeight = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    let desiredHeight = this.currentHeight;

    if (!this.resultTitle) {
      desiredHeight = 0;
    } else if (this.resultTitle && !this.showResultDescription) {
      desiredHeight = this.title.nativeElement.scrollHeight;
    } else if (this.resultDescription && this.showResultDescription) {
      desiredHeight = this.title.nativeElement.scrollHeight + this.description.nativeElement.scrollHeight;
    }

    if (this.currentHeight !== desiredHeight) {
      anime({
        targets: 'ion-item-group',
        height: desiredHeight,
        duration: 400,
        easing: 'easeOutElastic(1, 0.8)'
      });
      this.currentHeight = desiredHeight;
    }
  }

  handleSwipe(evt: any) {
    console.log(evt.direction);
    console.log(evt.overallVelocityY);
    console.log(evt.velocityY);
    if (this.resultDescription && !this.showResultDescription && evt.direction === 8) {
      this.showResultDescription = true;
    } else if (this.resultDescription && this.showResultDescription && evt.direction === 16) {
      this.showResultDescription = false;
    }
  }

}
