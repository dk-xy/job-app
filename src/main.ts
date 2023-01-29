import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';
import { defineCustomElements } from "@ionic/pwa-elements/loader";


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => defineCustomElements(window)) // Add this line
  .catch((err) => console.log(err));