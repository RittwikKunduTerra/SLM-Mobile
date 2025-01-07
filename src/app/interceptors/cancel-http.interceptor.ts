import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Injectable()
export class CancelHttpInterceptor implements HttpInterceptor {
  private readonly onDestroy$ = new Subject<void>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        takeUntil(this.onDestroy$),
        finalize(() => {
          this.onDestroy$.next();
          this.onDestroy$.complete();
        })
      );
  }
}
