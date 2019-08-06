import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleViewerPage } from './module-viewer.page';

const routes: Routes = [
    {
        path: '',
        component: ModuleViewerPage,
        children: [
          {
            path: 'anaesthetics',
            loadChildren: '../anaesthetics/anaesthetics.module#AnaestheticsPageModule'
          },
          {
            path: 'success-rates',
            loadChildren: '../success-rates/success-rates.module#SuccessRatesPageModule'
          },
          {
            path: 'prognosis',
            loadChildren: '../prognosis/prognosis.module#PrognosisPageModule'
          },
          {
            path: 'test',
            loadChildren: '../testing-module/testing-module.module#TestingModulePageModule'
          },
          {
            path: 'warfarin',
            loadChildren: '../warfarin/warfarin.module#WarfarinPageModule'
          },
          {
            path: 'periodontitis-classification',
            loadChildren: '../periodontitis-classification/periodontitis-classification.module#PeriodontitisClassificationPageModule'
          },
          {
            path: 'periodontal-recall',
            loadChildren: '../periodontal-recall/periodontal-recall.module#PeriodontalRecallPageModule'
          },
          {
            path: 'rdctmd',
            loadChildren: '../rdctmd/rdctmd.module#RdctmdPageModule'
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
