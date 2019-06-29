import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class Themes {
none = ``;
dark =
  `--ion-background-color: #121212;
  --ion-background-color-rgb: 18,18,18;
  --ion-background-shade: #0F0F0F;
  --ion-item-background: #1d1d1d;
  --ion-tab-bar-background: #1d1d1d;
  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255,255,255;

  --ion-color-step-50: #1e1e1e;
  --ion-color-step-100: #2a2a2a;
  --ion-color-step-150: #363636;
  --ion-color-step-200: #414141;
  --ion-color-step-250: #4d4d4d;
  --ion-color-step-300: #595959;
  --ion-color-step-350: #656565;
  --ion-color-step-400: #717171;
  --ion-color-step-450: #7d7d7d;
  --ion-color-step-500: #898989;
  --ion-color-step-550: #949494;
  --ion-color-step-600: #a0a0a0;
  --ion-color-step-650: #acacac;
  --ion-color-step-700: #b8b8b8;
  --ion-color-step-750: #c4c4c4;
  --ion-color-step-800: #d0d0d0;
  --ion-color-step-850: #dbdbdb;
  --ion-color-step-900: #e7e7e7;
  --ion-color-step-950: #f3f3f3;`;
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
