import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class Themes {
none = ``;
dark =
  `--ion-background-color: #1e2023;
  --ion-background-color-rgb: 30,32,35;

  --ion-text-color: #ffffff;
  --ion-text-color-rgb: 255,255,255;

  --ion-color-step-50: #292b2e;
  --ion-color-step-100: #353639;
  --ion-color-step-150: #404144;
  --ion-color-step-200: #4b4d4f;
  --ion-color-step-250: #56585a;
  --ion-color-step-300: #626365;
  --ion-color-step-350: #6d6e70;
  --ion-color-step-400: #78797b;
  --ion-color-step-450: #838486;
  --ion-color-step-500: #8f9091;
  --ion-color-step-550: #9a9b9c;
  --ion-color-step-600: #a5a6a7;
  --ion-color-step-650: #b0b1b2;
  --ion-color-step-700: #bcbcbd;
  --ion-color-step-750: #c7c7c8;
  --ion-color-step-800: #d2d2d3;
  --ion-color-step-850: #dddede;
  --ion-color-step-900: #e9e9e9;
  --ion-color-step-950: #f4f4f4;`;
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
