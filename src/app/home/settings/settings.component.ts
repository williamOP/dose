import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsService } from 'src/app/dataServices/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  darkMode = this.settingsService.isDark;

  constructor(private modalController: ModalController,
              private settingsService: SettingsService) { }

  ngOnInit() {
  }

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  async toggleDarkMode() {
    await this.settingsService.setDarkMode(this.darkMode);
  }
}
