import { Component, OnInit, ViewChild } from '@angular/core';
import { Module } from '../module';
import { IonRouterOutlet } from '@ionic/angular';
import { TitleBarComponent } from './title-bar/title-bar.component';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild(IonRouterOutlet) loadedModule: Module;
  @ViewChild(TitleBarComponent) titleBar: TitleBarComponent;

  moduleActive = false;
  activeView = 'primary';

  constructor() {
  }

  ngOnInit() {
  }

  onActivate(evt: any) {
    this.loadedModule = evt;
    this.moduleActive = true;
    this.loadedModule.content.scrollEvents = true;
    setTimeout(() => this.titleBar.onActivate());
  }

  openLink(link) {
    window.open(link, '_system');
  }
}
