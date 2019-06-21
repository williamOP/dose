import { Component, OnInit, ViewChild, } from '@angular/core';
import { Module } from '../module';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild(IonRouterOutlet) loadedModule: Module;

  moduleActive = false;


  constructor() {
   }

  ngOnInit() {
  }

  onActivate(evt: any) {
    this.loadedModule = evt;
    this.loadedModule.inViewer = true;
    this.moduleActive = true;
  }

  openLink(link) {
    console.log(link);
    window.open(link, '_system');
  }
}
