import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ReuseStrategy } from './components/utils/route-reuse-stratergy';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseStrategy, 
    // },
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),  
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    CookieService
    ]
};