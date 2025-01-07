import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {
  EntityDetailsComponent,
  EntityAttributesComponent,
  EntitySitesComponent,
  EntityActiveEquipmentsComponent,
  EntityPassiveEquipmentsComponent,
  DocumentsComponent,
  EntityTicketsComponent,
  PlacesComponent,
  EntityService,
  ModalService,
  TicketsService,
  EntityType,
  SitesComponent,
  ConfigurationService,
} from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { EntityActiveEquipmentsWrapperComponent } from '../../shared/entity-active-equipments-wrapper/entity-active-equipments-wrapper.component';
import { EntityPassiveEquipmentsWrapperComponent } from '../../shared/entity-passive-equipments-wrapper/entity-passive-equipments-wrapper.component';

@Component({
  selector: 'app-places-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule,
    CommonModule,
    EntityDetailsComponent,
    EntityAttributesComponent,
    EntitySitesComponent,
    MatTabsModule,
    MatDividerModule,
    EntityActiveEquipmentsWrapperComponent,
    EntityPassiveEquipmentsWrapperComponent,
    DocumentsComponent,
    EntityTicketsComponent,
  ],
  templateUrl: './places-details.component.html',
  providers: [
    EntityService,
    ModalService,
    TicketsService,
    ConfigurationService,
  ],
  styleUrl: './places-details.component.css',
})
export class PlacesDetailsComponent extends PlacesComponent {
  private apiService = inject(EntityService);
  private apiHelperService = inject(ApiHelperService);
  routerSubscription?: Subscription;

  override ngOnInit(): void {
    super.ngOnInit();

    this.selectedRowSubscription?.unsubscribe();
    this.selectedEntityDefinitionSubscription?.unsubscribe();

    this.selectedEntity = JSON.parse(
      sessionStorage.getItem(
        `entityData_${EntityType.Places}/${this.activatedRoute.snapshot?.params?.['id']}`,
      ) || 'null',
    );
    this.selectedEntityDefinition = JSON.parse(
      sessionStorage.getItem(`entityDef_${EntityType.Places}`) || 'null',
    );

    this.selectedRowSubscription =
      this.dataSharingService.selectedRow$.subscribe((row: any) => {});

    this.selectedEntityDefinitionSubscription =
      this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {});

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id'];
        this.selectedEntity = JSON.parse(
          sessionStorage.getItem(`entityData_${EntityType.Places}/${id}`) ||
            'null',
        );
        this.selectedEntityDefinition = JSON.parse(
          sessionStorage.getItem(`entityDef_${EntityType.Places}`) || 'null',
        );
      }
    });
  }

  override navigatedToOtherEntity(event: {
    otherEntityName: any;
    otherEntityId: any;
  }): void {
    this.selectedRowSubscription?.unsubscribe();
    this.selectedEntityDefinitionSubscription?.unsubscribe();
    this.apiHelperService.fetchDefinition(
      event.otherEntityName,
      event.otherEntityId,
      this.apiService,
    );
  }

  override ngOnDestroy(): void {
    this?.routerSubscription?.unsubscribe();
  }
  edited() {
    this.selectedEntity = JSON.parse(
      sessionStorage.getItem(
        `entityData_${EntityType.Places}/${this.activatedRoute.snapshot?.params?.['id']}`,
      ) || 'null',
    );
    this.selectedEntityDefinition = JSON.parse(
      sessionStorage.getItem(`entityDef_${EntityType.Places}`) || 'null',
    );
  }
}
