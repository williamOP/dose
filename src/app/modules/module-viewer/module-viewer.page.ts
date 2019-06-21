import { Component, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../moduleLibrary';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-module-viewer',
  templateUrl: './module-viewer.page.html',
  styleUrls: ['./module-viewer.page.scss'],
})
export class ModuleViewerPage implements OnInit {
  @ViewChild(IonRouterOutlet) loadedModule: Module;
  moduleActive = false;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
  }

  onActivate(evt: any) {
    this.loadedModule = evt;
    this.loadedModule.inViewer = true;
    this.moduleActive = true;
  }
}
