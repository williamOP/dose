import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleViewerPage } from './module-viewer.page';
import { getModuleMetadata } from '../module';

const routes: Routes = [
    {
        path: '',
        component: ModuleViewerPage,
        children: [
          {
            path: getModuleMetadata('anaesthetics').id,
            loadChildren: '../anaesthetics/anaesthetics.module#AnaestheticsPageModule'
          },
          {
            path: getModuleMetadata('success-rates').id,
            loadChildren: '../success-rates/success-rates.module#SuccessRatesPageModule'
          },
          {
            path: getModuleMetadata('prognosis').id,
            loadChildren: '../prognosis/prognosis.module#PrognosisPageModule'
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
