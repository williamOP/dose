import { Component, OnInit, ViewChild, } from '@angular/core';
import { Module } from '../module';
import { IonRouterOutlet, PopoverController } from '@ionic/angular';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild(IonRouterOutlet) loadedModule: Module;
  moduleActive = false;
  showResultDescription = false;

  constructor(private popoverController: PopoverController) {
   }

  ngOnInit() {
  }

  async presentFilter(event: Event) {
    const popover = await this.popoverController.create({
      component: FilterPopoverComponent,
      componentProps: {filters: this.loadedModule.filters},
      event
    });
    await popover.present();
    popover.onWillDismiss().then(() => this.loadedModule.updateFilter());
  }

  onActivate(evt: any) {
    this.loadedModule = evt;
    this.moduleActive = true;
  }

  openLink(link) {
    window.open(link, '_system');
  }
}
