import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleViewerRoutingModule } from './module-viewer.router.module';

import { IonicModule } from '@ionic/angular';

import { ModuleViewerPage } from './module-viewer.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleViewerRoutingModule,
    SuperTabsModule
  ],
  declarations: [ModuleViewerPage]
})
export class ModuleViewerPageModule {
  constructor() {}
}
