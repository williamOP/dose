import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleDataService } from '../dataServices/moduleData.service';
import { ModalController, IonSearchbar, NavController } from '@ionic/angular';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from '../dataServices/settings.service';
import { Plugins } from '@capacitor/core';
import { PluginListenerHandle } from '@capacitor/core/dist/esm/web/network';
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;
  backButtonListener: PluginListenerHandle;

  searchActive = false;
  searchbarText = '';

  modulesList = this.moduleDataService.getModuleLibrary();

  constructor(private moduleDataService: ModuleDataService,
              private modalController: ModalController,
              private settingsService: SettingsService) {}

  ngOnInit() {
    // Sorts Modules alphatetically by title
    this.sortArrayByProperty(this.modulesList, 'title');
    this.settingsService.applySettingsFromStorage();

  }

  ionViewDidEnter() {
    this.backButtonListener = App.addListener('backButton', () => App.exitApp());
  }

  ionViewWillLeave() {
    this.backButtonListener.remove();
  }

  filterList(searchTerm: string) {
    for (const module of this.modulesList) {
      module.hide = !(module.title.toLowerCase().search(searchTerm.toLowerCase()) > -1);
    }
  }

  async presentSettings(event: Event) {
    const settingsModal = await this.modalController.create({
      component: SettingsComponent
    });
    await settingsModal.present();
  }

  async openSearchBar() {
    this.searchActive = true;
    setTimeout(() => this.searchBar.setFocus(), 100);
  }

  // Sorts an array of objects by the provided property
  sortArrayByProperty(array: object[], property: string) {
    array.sort((a, b) => a[property].localeCompare(b[property]));
  }
}
