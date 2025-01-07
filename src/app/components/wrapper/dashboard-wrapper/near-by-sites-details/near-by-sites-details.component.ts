import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {
  EntityLandlordAgreementsComponent,
  EntityContractorAgreementsComponent,
  EntityService,
  ModalService,
  TicketsService,
  SitesComponent,
  EntityType,
} from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntityDetailsWrapperComponent } from '../../shared/entity-details-wrapper/entity-details-wrapper.component';

@Component({
  selector: 'app-near-by-sites-details',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    EntityDetailsWrapperComponent,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    EntityLandlordAgreementsComponent,
    EntityContractorAgreementsComponent,
  ],
  providers: [EntityService, ModalService, TicketsService],

  templateUrl: './near-by-sites-details.component.html',
  styleUrl: './near-by-sites-details.component.css',
})
export class NearBySitesDetailsComponent extends SitesComponent {
  private apiService = inject(EntityService);
  private apiHelperService = inject(ApiHelperService);
  routerSubscription?: Subscription;

  override ngOnInit(): void {
    super.ngOnInit();
    this.selectedRowSubscription?.unsubscribe();
    this.selectedEntityDefinitionSubscription?.unsubscribe();

    this.selectedEntity = JSON.parse(
      sessionStorage.getItem(
        `entityData_${EntityType.MySites}/${this.activatedRoute.snapshot?.params?.['id']}`,
      ) || 'null',
    );

    this.selectedEntityDefinition = JSON.parse(
      sessionStorage.getItem(`entityDef_${EntityType.MySites}`) || 'null',
    );

    this.selectedRowSubscription =
      this.dataSharingService.selectedRow$.subscribe((row: any) => {});

    this.selectedEntityDefinitionSubscription =
      this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {});

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id'];
        this.selectedEntity = JSON.parse(
          sessionStorage.getItem(`entityData_${EntityType.Sites}/${id}`) ||
            'null',
        );

        this.selectedEntityDefinition = JSON.parse(
          sessionStorage.getItem(`entityDef_${EntityType.Sites}`) || 'null',
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

  edited() {
    this.selectedEntity = JSON.parse(
      sessionStorage.getItem(
        `entityData_${EntityType.Sites}/${this.activatedRoute.snapshot?.params?.['id']}`,
      ) || 'null',
    );

    this.selectedEntityDefinition = JSON.parse(
      sessionStorage.getItem(`entityDef_${EntityType.Sites}`) || 'null',
    );
  }

  override ngOnDestroy(): void {
    this?.routerSubscription?.unsubscribe();
  }
  @ViewChild('equipment') equipmentPanel!: MatExpansionPanel;
  override openPassiveEquipmentTab() {
    this.equipmentPanel.open();
  }
}
