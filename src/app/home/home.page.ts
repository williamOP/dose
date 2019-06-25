import { Component, OnInit } from '@angular/core';
import { ModuleDataService } from '../dataServices/moduleData.service';
import { ModalController } from '@ionic/angular';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from '../dataServices/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modulesList = this.moduleDataService.getModuleLibrary();

  constructor(private moduleDataService: ModuleDataService,
              private modalController: ModalController,
              private settingsService: SettingsService) {}

  ngOnInit() {
    // Sorts Modules alphatetically by title
    this.sortArrayByProperty(this.modulesList, 'title');;
    this.settingsService.applySettingsFromStorage();
  }

  filterList(evt: any) {
    const searchTerm = evt.srcElement.value.toLowerCase();

    for (const module of this.modulesList) {
      module.hide = !(module.title.toLowerCase().search(searchTerm) > -1);
    }
  }

  async presentSettings(event: Event) {
    const settingsModal = await this.modalController.create({
      component: SettingsComponent
    });
    await settingsModal.present();
    settingsModal.onWillDismiss().then(() => console.log('Settings closed'));
  }

  // Sorts an array of objects by the provided property
  sortArrayByProperty(array: object[], property: string) {
    array.sort((a, b) => a[property].localeCompare(b[property]));
  }
}
