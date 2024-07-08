import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { MoviesStateService } from './state/movies.state';
import { MovieDataService } from './services/movie-data.service';
import { SharedModule } from './shared/shared.module';
import { MovieDetailsModule } from './movie-details/movie-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    HttpClientModule,
    MovieDetailsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    MoviesStateService,
    MovieDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
