import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'anaesthetics', loadChildren: './modules/anaesthetics/anaesthetics.module#AnaestheticsPageModule'},
  { path: 'success-rates', loadChildren: './modules/success-rates/success-rates.module#SuccessRatesPageModule' },
  { path: 'module', loadChildren: './modules/module-viewer/module-viewer.module#ModuleViewerPageModule' },
  { path: 'prognosis', loadChildren: './modules/prognosis/prognosis.module#PrognosisPageModule' },
  { path: 'testing-module', loadChildren: './modules/testing-module/testing-module.module#TestingModulePageModule' },
  { path: 'warfarin', loadChildren: './modules/warfarin/warfarin.module#WarfarinPageModule' },  { path: 'periodontitis-classification', loadChildren: './modules/periodontitis-classification/periodontitis-classification.module#PeriodontitisClassificationPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
