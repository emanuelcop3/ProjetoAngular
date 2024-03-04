import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app';
import { AppComponent } from './app/app.componentes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
