import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleViewerRoutingModule } from './module-viewer.router.module';

import { IonicModule } from '@ionic/angular';

import { ModuleViewerPage } from './module-viewer.page';
import { FilterPopoverComponent } from './filter-popover/filter-popover.component';
import { ResultFooterComponent } from './result-footer/result-footer.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleViewerRoutingModule
    ],
  declarations: [ModuleViewerPage, FilterPopoverComponent, ResultFooterComponent, TitleBarComponent],
  entryComponents: [FilterPopoverComponent, ResultFooterComponent, TitleBarComponent]
})
export class ModuleViewerPageModule {
  constructor() {}
}
