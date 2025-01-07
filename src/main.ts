import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment.prod';
import { enableProdMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { Environment } from './environments/enums/environment.enum';


if (environment.buildType == Environment.Production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



