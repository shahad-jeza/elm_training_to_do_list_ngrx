import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/task.reducer';
import { provideEffects } from '@ngrx/effects';
// import { TaskEffects } from './store/task.effects';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore({ tasks: taskReducer }),
   // provideEffects([TaskEffects]),
  ]
};
