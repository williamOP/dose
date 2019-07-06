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
  @ViewChild(IonToolbar, {read: ElementRef}) titleToolbar: ElementRef;

  searchActive = false;
  expandTitle = false;
  hidden = false;
  scrollTriggerDistance = 20;
  currentHeight: number;
  standardHeight: number;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  onActivate() {
    this.standardHeight = this.titleToolbar.nativeElement.scrollHeight;
    this.currentHeight = this.standardHeight;

    this.content.ionScroll.subscribe(scrollEvent => {
      if (!this.hidden && scrollEvent.detail.deltaY > this.scrollTriggerDistance &&
        scrollEvent.detail.currentY > 100) {
        this.hidden = true;
      } else if (this.hidden && scrollEvent.detail.deltaY < -this.scrollTriggerDistance) {
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
    let targetHeight = this.currentHeight;

    if (this.hidden) {
      targetHeight = 0;
    } else {
      targetHeight = this.standardHeight;
    }

    if (targetHeight !== this.currentHeight) {
      setTimeout(() => {
        anime({
          targets: '.title-toolbar',
          height: targetHeight,
          easing: 'easeOutCubic',
          duration: 300
        });
      });
      this.currentHeight = targetHeight;
    }
  }

  async openSearchBar() {
    this.searchActive = true;
    setTimeout(() => this.searchBar.setFocus(), 100);
  }
}
