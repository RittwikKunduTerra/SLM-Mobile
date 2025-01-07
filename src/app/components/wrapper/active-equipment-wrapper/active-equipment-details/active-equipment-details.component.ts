import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { EntityDetailsComponent, EntityAttributesComponent, DocumentsComponent, EntityTicketsComponent, EntityService, ModalService, TicketsService, EntityType, EntityMovementHistoryComponent, ActiveEquipmentComponent, EntityEquipmentChildrenComponent } from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-active-equipment-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule, CommonModule,
    EntityDetailsComponent,
    EntityAttributesComponent,
    DocumentsComponent,
    EntityTicketsComponent,
    EntityMovementHistoryComponent,
    EntityEquipmentChildrenComponent],
  templateUrl: './active-equipment-details.component.html',
  providers: [EntityService, ModalService, TicketsService,],
  styleUrl: './active-equipment-details.component.css'
})
export class ActiveEquipmentDetailsComponent extends ActiveEquipmentComponent {

  private apiService = inject(EntityService)
  private apiHelperService = inject(ApiHelperService)
  routerSubscription?: Subscription
  @ViewChild('details') detailsPanel!: MatExpansionPanel;

  override ngOnInit(): void {
    super.ngOnInit()

    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()

    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.ActiveEquipments}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.ActiveEquipments}`) || 'null')


    this.selectedRowSubscription = this.dataSharingService.selectedRow$.subscribe((row: any) => {
    })

    this.selectedEntityDefinitionSubscription = this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {

    });

    this.dataSharingService.refreshSameRoute$.subscribe((id) => {
      this.detailsPanel.open()
      this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.ActiveEquipments}/${id}`) || 'null')
      this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.ActiveEquipments}`) || 'null')

    });

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id']
        this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.ActiveEquipments}/${id}`) || 'null')
        this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.ActiveEquipments}`) || 'null')
      }
    })

  }

  override navigatedToOtherEntity(event: { otherEntityName: any; otherEntityId: any; }): void {
    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()

    this.apiHelperService.fetchDefinition(event.otherEntityName, event.otherEntityId, this.apiService, true)
  }

  override ngOnDestroy(): void {
    this?.routerSubscription?.unsubscribe()
  }
  edited() {
    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.ActiveEquipments}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.ActiveEquipments}`) || 'null')

  }
}
