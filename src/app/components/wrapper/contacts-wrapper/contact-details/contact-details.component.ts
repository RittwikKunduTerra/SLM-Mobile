import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { EntityDetailsComponent, EntityAttributesComponent, EntityContactsAgreementsComponent, ContactsSitesComponent, EntityActiveEquipmentsComponent, EntityPassiveEquipmentsComponent, DocumentsComponent, EntityTicketsComponent, EntityPaymentsComponent, ContactsComponent, EntityService, EntityType, ModalService, TicketsService, BreadcrumbService } from 'slm-library';
import { ApiHelperService } from '../../../services/api-helper-service';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [MatCardModule, CommonModule,
    MatExpansionModule,
    EntityDetailsComponent,
    EntityAttributesComponent,
    MatTabsModule,
    MatDividerModule,
    EntityContactsAgreementsComponent,
    ContactsSitesComponent,
    EntityActiveEquipmentsComponent,
    EntityPassiveEquipmentsComponent,
    DocumentsComponent,
    EntityTicketsComponent,
    EntityPaymentsComponent],
  providers: [EntityService, ModalService, TicketsService],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent extends ContactsComponent {
  private apiService = inject(EntityService)
  private apiHelperService = inject(ApiHelperService)
  routerSubscription?: Subscription

  override ngOnInit(): void {
    super.ngOnInit()

    this.selectedRowSubscription?.unsubscribe()
    this.selectedEntityDefinitionSubscription?.unsubscribe()

    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Contacts}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Contacts}`) || 'null')

    this.selectedRowSubscription = this.dataSharingService.selectedRow$.subscribe((row: any) => {
    })

    this.selectedEntityDefinitionSubscription = this.dataSharingService.selectedEntityDefinition$.subscribe((data) => {

    });

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let id = this.activatedRoute.snapshot?.params?.['id']
        this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Contacts}/${id}`) || 'null')
        this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Contacts}`) || 'null')
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
    this.selectedEntity = JSON.parse(sessionStorage.getItem(`entityData_${EntityType.Contacts}/${this.activatedRoute.snapshot?.params?.['id']}`) || 'null')
    this.selectedEntityDefinition = JSON.parse(sessionStorage.getItem(`entityDef_${EntityType.Contacts}`) || 'null')
  }
}
