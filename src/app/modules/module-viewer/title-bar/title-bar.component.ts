import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Module } from '../../module';
import { IonSearchbar, PopoverController, IonContent, IonToolbar } from '@ionic/angular';
import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  @Input() loadedModule: Module;
  @Input() moduleActive: boolean;
  @Input() content: IonContent;

  @ViewChild(IonSearchbar) searchBar: IonSearchbar;
  @ViewChild('title', {read: ElementRef}) title: ElementRef;
  @ViewChild('header', {read: ElementRef}) header: ElementRef;

  activeView = 'primary';
  searchActive = false;
  expandTitle = false;
  hidden = false;
  scrollTriggerVelocity = 0.3;
  currentTranslation: number;
  standardHeight: number;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  onActivate() {
    setTimeout(this.standardHeight = this.header.nativeElement.scrollHeight);
    this.currentTranslation = this.standardHeight;

    this.content.ionScroll.subscribe(scrollEvent => {
      if (!this.hidden && scrollEvent.detail.velocityY > this.scrollTriggerVelocity &&
        scrollEvent.detail.currentY > 30) {
        this.hidden = true;
      } else if ((this.hidden && scrollEvent.detail.velocityY < -this.scrollTriggerVelocity) ||
        scrollEvent.detail.currentY < 30 || this.activeView !== 'primary') {
        this.hidden = false;
      }
      this.animateTitleToolbar();
    });
  }

  async presentFilter(event: Event) {
    const popover = await this.popoverController.create({
      component: FilterPopoverComponent,
      componentProps: {filters: this.loadedModule.filters,
                      sortByList: this.loadedModule.sortByList,
                      module: this.loadedModule},
      event
    });
    await popover.present();
    popover.onWillDismiss().then(() => this.loadedModule.updateFilter());
  }

  async animateTitleToolbar() {
    let translation = this.currentTranslation;

    if (this.hidden) {
      translation = -this.standardHeight;
    } else {
      translation = 0;
    }

    if (translation !== this.currentTranslation) {
      setTimeout(() => {
        anime({
          targets: 'app-title-bar',
          translateY: translation,
          easing: 'easeOutCubic',
          duration: 400
        });
      });
      this.currentTranslation = translation;
    }
  }

  test(evt: any) {
    console.log('ca');
    console.log(evt);
  }

  async openSearchBar() {
    this.searchActive = true;
    setTimeout(() => this.searchBar.setFocus(), 100);
  }
}
