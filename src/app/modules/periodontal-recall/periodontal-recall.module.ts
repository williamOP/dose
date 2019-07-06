import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeriodontalRecallPage } from './periodontal-recall.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodontalRecallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeriodontalRecallPage]
})
export class PeriodontalRecallPageModule {}
