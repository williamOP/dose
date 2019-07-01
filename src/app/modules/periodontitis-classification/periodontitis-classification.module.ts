import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeriodontitisClassificationPage } from './periodontitis-classification.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodontitisClassificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeriodontitisClassificationPage]
})
export class PeriodontitisClassificationPageModule {}
