import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Module } from '../module';
import { IonRouterOutlet, PopoverController, IonSearchbar } from '@ionic/angular';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild(IonRouterOutlet) loadedModule: Module;
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;
  @ViewChild('resultTitle', {read: ElementRef}) resultTitleElement: ElementRef;

  moduleActive = false;
  showResultDescription = false;
  resultTranslationY = '0px';
  activeView = 'primary';
  searchActive = false;

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

  async openSearchBar() {
    this.searchActive = true;
    setTimeout(() => this.searchBar.setFocus(), 100);
  }
}
