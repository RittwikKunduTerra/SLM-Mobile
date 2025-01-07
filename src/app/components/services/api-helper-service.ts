import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataSharingService, EntityService, LoaderService } from 'slm-library';

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  private apiService?: EntityService;

  constructor(
    private dataSharingService: DataSharingService,
    private loaderService: LoaderService,
    private router: Router
  ) { }
  /**
   * Fetches entity definition and related data, and updates shared services.
   * @param otherEntityName Name of the other entity.
   * @param otherEntityId ID of the other entity.
   */
  fetchDefinition(otherEntityName: any, otherEntityId: any, apiService: EntityService, isEmitRefreshForSameEntity: boolean = false): void {
    this.apiService = apiService
    this.loaderService.showLoaderDialog();

    this.apiService!
      .getEntityDefinitionList(otherEntityName)
      .pipe(finalize(() => this.loaderService.hideLoaderDialog()))
      .subscribe({
        next: (data) => {
          sessionStorage.setItem(`entityDef_${otherEntityName}`, JSON.stringify(data))
          this.fetchOtherEntityData(otherEntityName, otherEntityId, isEmitRefreshForSameEntity)
        },
        error: (error) => {
          console.error('Error fetching entity definition:', error);
        },
      });
  }

  /**
   * Fetches data for the other entity and updates shared services.
   * @param otherEntityName Name of the other entity.
   * @param otherEntityId ID of the other entity.
   */
  private fetchOtherEntityData(otherEntityName: any, otherEntityId: any, isEmitRefreshForSameEntity: boolean = false): void {
    this.apiService!.getSelectedEntityData(otherEntityName, otherEntityId)
      .subscribe({
        next: (data) => {
          sessionStorage.setItem(`entityData_${otherEntityName}/${otherEntityId}`, JSON.stringify(data))
          this.loaderService.hideLoaderDialog()
          this.router.navigate([otherEntityName, otherEntityId])
          if (isEmitRefreshForSameEntity) {
            this.dataSharingService?.refreshSameRoute(otherEntityId)
          }
        },
        error: (error) => {
          console.error('Error fetching entity data:', error)
          this.loaderService.hideLoaderDialog()
        },
      });
  }
}
