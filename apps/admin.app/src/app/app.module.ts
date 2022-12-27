import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { LoadingService } from '@core/service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptorService } from '@core/interceptor';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment: {
        applicationName: 'HitFlow',
        baseUrl: '/api',
        production: false,
      },
    }),
    // http interceptor for authorization will be handled by jwt module
    JwtModule .forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        // Since we are calling http requests from the same domain as app we do not need to specified domains here
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
