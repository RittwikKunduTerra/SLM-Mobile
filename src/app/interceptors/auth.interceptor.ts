import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Environment } from '../../environments/enums/environment.enum';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AlertTypeEnum, DialogService, LoaderService } from 'slm-library';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isDialogOpen = false; 
  constructor(
    private dialogService: DialogService,
    private loaderService: LoaderService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url === `${environment.entityBaseUrl}Entity.slm_postSingleAgreementPaymentAdvices`
      || request.url === `${environment.adviceExcelGenBaseUrl}ExcelGenerator.generateMultipleAgreementExcel`
      || request.url === `${environment.entityBaseUrl}Entity.slm_postMultipleAgreementsPaymentAdvices`
      || request.url === `${environment.adviceExcelGenBaseUrl}ExcelGenerator.postAdviceExcel`
      || request.url === `${environment.entityBaseUrl}Entity.addEntityData`
      || request.url === `${environment.entityBaseUrl}Entity.addEntityDataExtId`
      || request.url === `${environment.entityBaseUrl}Entity.newuid`
      || request.url === `${environment.entityBaseUrl}Entity.setEntityData`
      || request.url === `${environment.host}services/${environment.EnginePaymentUploader}/assets/upload`
    ) {
      this.loaderService.showLoaderDialog();

    }

    if (environment.buildType !== Environment.Development) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
    } else {
      request = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.cookieService.get('PARE_token')}`
        })
      });
    
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (environment.buildType !== Environment.Development) {
          this.cookieService.deleteAll();
          this.router.navigate(['login']);
          }
        } else {
          try {
            let message;
            let errorData = error.error;

            if (typeof errorData === 'string') {
              try {
                errorData = JSON.parse(errorData);
              } catch (e) {
                // JSON parsing failed, use the original string
              }
            }

            if (errorData && typeof errorData === 'object' && errorData.message) {
              message = errorData.message;
            } else if (typeof errorData === 'string') {
              message = errorData;
            } else {
              message = 'Server error occurred';
            }

            // Check if the dialog is already open
            if (!this.isDialogOpen) {
              this.isDialogOpen = true; // Set the flag to true to indicate the dialog is open

              const option = {
                alertType: AlertTypeEnum.AlertTypeError,
                title: "Error",
                message: message,
                buttonOneLabel: "OK",
              };

              this.dialogService.open(option).afterClosed().subscribe(() => {
                this.isDialogOpen = false; // Reset the flag when dialog is closed
              });
            }
          } catch (parseError) {
            if (!this.isDialogOpen) {
              this.isDialogOpen = true; // Set the flag to true to indicate the dialog is open

              const option = {
                alertType: AlertTypeEnum.AlertTypeError,
                title: "Error",
                message: "An error occurred",
                buttonOneLabel: "OK",
              };

              this.dialogService.open(option).afterClosed().subscribe(() => {
                this.isDialogOpen = false; // Reset the flag when dialog is closed
              });
            }
          }
        }

        return throwError(() => error);
      }),
      finalize(() => {
        this.loaderService.hideLoaderDialog();
      })
    );
  }
}