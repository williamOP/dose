import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleViewerPage } from './module-viewer.page';
import { getModuleData } from '../moduleLibrary';

const routes: Routes = [
    {
        path: '',
        component: ModuleViewerPage,
        children: [
          {
            path: getModuleData('anaesthetics').id,
            loadChildren: '../anaesthetics/anaesthetics.module#AnaestheticsPageModule'
          },
          {
            path: getModuleData('success-rates').id,
            loadChildren: '../success-rates/success-rates.module#SuccessRatesPageModule'
          }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ModuleViewerRoutingModule {
}
