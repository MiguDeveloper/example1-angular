import { environment } from './../../environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('paso por el interceptor');
    const urlBase = environment.urlApiExterna;
    if (request.url.indexOf(urlBase) === -1) {
      return next.handle(request);
    } else {
      // aqui es donde pondremos el token
      const header = new HttpHeaders({ 'x-token': 'kdnekdnekdnkedn' });
      const clonRequest = request.clone({ headers: header });

      return next
        .handle(clonRequest)
        .pipe(catchError((err) => this.manejarError(err)));
    }
  }

  manejarError(error: HttpErrorResponse) {
    console.log('hubo un error');
    return throwError('Error personalizado');
  }
}
