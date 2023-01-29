import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';

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
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        // Since we are calling http requests from the same domain as app we do not need to specified domains here
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
