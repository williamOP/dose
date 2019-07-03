import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Module } from '../module';
import { IonRouterOutlet, PopoverController, IonSearchbar } from '@ionic/angular';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild('title', {read: ElementRef}) title: ElementRef;
  @ViewChild(IonRouterOutlet) loadedModule: Module;
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;

  moduleActive = false;
  activeView = 'primary';
  searchActive = false;
  expandTitle = false;

  constructor(private popoverController: PopoverController) {
   }

  ngOnInit() {
  }

  onActivate(evt: any) {
    this.loadedModule = evt;
    this.moduleActive = true;
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

  openLink(link) {
    window.open(link, '_system');
  }

  toggleExpandTitle() {
    const initialTitleHeight = this.title.nativeElement.scrollHeight;
    let finalTitleHeight: number;
    this.expandTitle = !this.expandTitle;
    let padding = 0;
    setTimeout(() => {
      finalTitleHeight = this.title.nativeElement.scrollHeight;
      if (finalTitleHeight > initialTitleHeight) {
        padding = 8;
      }
      anime({
        targets: '.title-toolbar',
        height: '+=(finalTitleHeight - initialTitleHeight)',
        paddingTop: padding + 'px',
        paddingBottom: padding + 'px',
        easing: 'easeOutCubic',
        duration: 200
      });
    });
  }

  handleTitleSwipe(evt: any) {
    if ((!this.expandTitle && evt.direction === 16) || (this.expandTitle && evt.direction === 8)) {
      this.toggleExpandTitle();
    }
  }

  async openSearchBar() {
    this.searchActive = true;
    setTimeout(() => this.searchBar.setFocus(), 100);
  }
}
