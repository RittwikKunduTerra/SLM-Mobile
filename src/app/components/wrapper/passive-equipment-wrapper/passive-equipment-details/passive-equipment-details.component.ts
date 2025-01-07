import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { EntityDetailsComponent, EntityAttributesComponent, DocumentsComponent, EntityTicketsComponent, EntityService, ModalService, TicketsService, EntityType, EntityMovementHistoryComponent, ActiveEquipmentComponent, PassiveEquipmentComponent, LoaderService, EntityEquipmentChildrenComponent } from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { EntityEquipmentChildrenWrapperComponent } from '../../shared/entity-equipment-children-wrapper/entity-equipment-children-wrapper.component';
import { EntityDetailsWrapperComponent } from "../../shared/entity-details-wrapper/entity-details-wrapper.component";

@Component({
  selector: 'app-passive-equipment-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatExpansionModule, CommonModule,
    EntityDetailsWrapperComponent,
    EntityAttributesComponent,
    DocumentsComponent,
    EntityTicketsComponent,
    EntityMovementHistoryComponent,
    EntityEquipmentChildrenWrapperComponent,
    EntityDetailsWrapperComponent
],
  templateUrl: './passive-equipment-details.component.html',
  providers: [EntityService, ModalService, TicketsService,],
  styleUrl: './passive-equipment-details.component.css'
})
export class PassiveEquipmentDetailsComponent extends PassiveEquipmentComponent {

  private apiService = inject(EntityService)
  private apiHelperService = inject(ApiHelperService)
  routerSubscription?: Subscription
  @ViewChild('details') detailsPanel!: MatExpansionPanel;

  override ngOnInit(): void {
    super.ngOnInit()

    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()

    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.PassiveEquipments}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.PassiveEquipments}`) || 'null')


    this.selectedRowSubscription = this.dataSharingService.selectedRow$.subscribe((row: any) => {
    })

    this.selectedEntityDefinitionSubscription = this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {

    });

    this.dataSharingService.refreshSameRoute$.subscribe((id) => {
      this.detailsPanel.open()
      this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.PassiveEquipments}/${id}`) || 'null')
      this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.PassiveEquipments}`) || 'null')

    });


    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id']
        this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.PassiveEquipments}/${id}`) || 'null')
        this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.PassiveEquipments}`) || 'null')
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
    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.PassiveEquipments}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.PassiveEquipments}`) || 'null')
  }
}
