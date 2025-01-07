import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { EntityDetailsComponent, EntityAttributesComponent, DocumentsComponent, EntitySitesComponent, TenantsActiveEquipmentComponent, EntityTicketsComponent, TenantsComponent, EntityType, EntityService, ModalService, TicketsService } from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tenants-details',
  standalone: true,
  imports: [MatCardModule, CommonModule,
    MatExpansionModule,
    MatTabsModule,
    EntityDetailsComponent,
    EntityAttributesComponent,
    DocumentsComponent,
    EntitySitesComponent,
    TenantsActiveEquipmentComponent,
    EntityTicketsComponent],
  providers: [EntityService, ModalService, TicketsService],
  templateUrl: './tenants-details.component.html',
  styleUrl: './tenants-details.component.css'
})
export class TenantsDetailsComponent extends TenantsComponent {
  private apiService = inject(EntityService)
  private apiHelperService = inject(ApiHelperService)
  routerSubscription?: Subscription

  override ngOnInit(): void {
    super.ngOnInit()

    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()

    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Tenants}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Tenants}`) || 'null')


    this.selectedRowSubscription = this.dataSharingService.selectedRow$.subscribe((row: any) => {
    })

    this.selectedEntityDefinitionSubscription = this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {

    });

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id']
        this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Tenants}/${id}`) || 'null')
        this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Tenants}`) || 'null')
      }
    })

  }

  override navigatedToOtherEntity(event: { otherEntityName: any; otherEntityId: any; }): void {
    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()
    this.apiHelperService.fetchDefinition(event.otherEntityName, event.otherEntityId, this.apiService)
  }

  override ngOnDestroy(): void {
    this?.routerSubscription?.unsubscribe()
  }
  edited() {
    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Tenants}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Tenants}`) || 'null')
  }
}
