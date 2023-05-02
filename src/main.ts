import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/in-memory-data.service';

import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
      })
    ),
  ],
});
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
