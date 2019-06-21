import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'anaesthetics', loadChildren: './modules/anaesthetics/anaesthetics.module#AnaestheticsPageModule'},
  { path: 'success-rates', loadChildren: './modules/success-rates/success-rates.module#SuccessRatesPageModule' },
  { path: 'module', loadChildren: './modules/module-viewer/module-viewer.module#ModuleViewerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
