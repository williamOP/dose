import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleViewerRoutingModule } from './module-viewer.router.module';

import { IonicModule } from '@ionic/angular';

import { ModuleViewerPage } from './module-viewer.page';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleViewerRoutingModule
    ],
  declarations: [ModuleViewerPage, FilterPopoverComponent],
  entryComponents: [FilterPopoverComponent]
})
export class ModuleViewerPageModule {
  constructor() {}
}
