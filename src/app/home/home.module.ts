import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LaComponent } from './la/la.component';
import { AnalgesicComponent } from './analgesic/analgesic.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, LaComponent, AnalgesicComponent, MiscComponent]
})
export class HomePageModule {}
