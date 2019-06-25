import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class Themes {
none = ``;
dark =
  `--ion-background-color: var(--ion-color-dark-tint);
  --ion-item-background-color: var(--ion-color-dark-shade);
  --ion-border-color: #444;
  --ion-text-color: var(--ion-color-dark-contrast);
  --ion-color-step-550: #fff;
  --ion-color-step-850: #fff;
  --color: var(--ion-color-dark)`;
}

@Injectable({
    providedIn: 'root'
  })
  export class ThemeService {
    themes = new Themes();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    setTheme(theme: string = 'none') {
      this.document.documentElement.style.cssText = this.themes[theme];
    }
  }
