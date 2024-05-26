import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { sharedReducer } from './app/shared/features/store/reducer/shared.reducer';
import { provideEffects } from '@ngrx/effects';
import { sharedEffects } from './app/shared/features/store/effects/shared.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from './environment/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
