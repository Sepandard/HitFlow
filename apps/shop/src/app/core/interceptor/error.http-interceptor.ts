import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { catchError } from 'rxjs/operators';
  import { throwError, Observable } from 'rxjs';
  
  export class ErrorHttpInterceptor implements HttpInterceptor {
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          const transformError: HttpErrorResponse = {
            ...error,
            message: typeof error.error === 'string' ? error.error : error.error
              ? error.error.message ?? error.message
              : error.message,
          };
          return throwError(() => transformError);
        })
      );
    }
  }
  