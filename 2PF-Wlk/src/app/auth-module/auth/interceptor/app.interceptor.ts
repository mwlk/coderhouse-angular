import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  url_base: string = environment.API_URL;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const httpReq = request.clone({
      url: this.url_base + request.url,
      setHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return next.handle(httpReq);
  }
}
