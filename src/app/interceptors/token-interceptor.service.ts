import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  private token = environment.ACCESS_TOKEN;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.performRequest(request)).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error:', error);
        return throwError(error);
      })
    );
  }

  private performRequest(request: HttpRequest<any>): HttpRequest<any> {
    let headers = request.headers;
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return request.clone({ headers });
  }
}
