// This class keeps track of settings variables (and should be accessed to retreive those values).
// It also stores settings values in storage

import { Injectable, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
import { ThemeService } from './theme.service';
import { Plugins, StatusBarStyle, Capacitor } from '@capacitor/core';
const { StatusBar } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnInit {
  // True = dark mode on
  isDark: boolean;

  constructor(private storageService: StorageService,
              private themeService: ThemeService) {
              }

  async ngOnInit() {
    await this.applySettingsFromStorage();
  }

  setDarkMode(isDark: boolean) {
    this.isDark = isDark;
    this.storageService.store('isDark', this.isDark.toString());

    if (this.isDark) {
      this.themeService.setTheme('dark');
      // Dark background, light icons/text
      if (Capacitor.isPluginAvailable('StatusBar')) {
        StatusBar.setBackgroundColor({color: '#1d1d1d'});
        StatusBar.setStyle({style: StatusBarStyle.Dark});
    }
    } else {
      this.themeService.setTheme('none');
      // Light background, dark icons/text
      if (Capacitor.isPluginAvailable('StatusBar')) {
        StatusBar.setStyle({style: StatusBarStyle.Light});
        StatusBar.setBackgroundColor({color: '#ffffff'});
      }
    }
  }

  // Retrieves settings from storage and applies the,
  async applySettingsFromStorage() {
    // Dark mode
    this.isDark = JSON.parse(await this.storageService.retrieve('isDark'));
    if (this.isDark !== null) {
      this.setDarkMode(this.isDark);
    }
  }
}
