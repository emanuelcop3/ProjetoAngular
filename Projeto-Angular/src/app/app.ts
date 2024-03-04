import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.spec';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
