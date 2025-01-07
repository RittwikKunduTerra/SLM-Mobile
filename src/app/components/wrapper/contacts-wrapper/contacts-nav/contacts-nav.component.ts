import { Component, HostListener, inject } from '@angular/core';
import { ContactsComponent, ContactsSitesComponent, DocumentsComponent, EntityActiveEquipmentsComponent, EntityAttributesComponent, EntityContactsAgreementsComponent, EntityContractorAgreementsComponent, EntityDetailsComponent, EntityLandlordAgreementsComponent, EntityPassiveEquipmentsComponent, EntityPaymentsComponent, EntityService, EntityTicketsComponent, EntityType, ModalService, SitesComponent, TicketsService } from 'slm-library';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';

@Component({
  selector: 'app-contacts-nav',
  standalone: true,
  imports: [
    EntityDataWrapperComponent,
    MatCardModule
  ],
  providers: [EntityService],
  templateUrl: './contacts-nav.component.html',
  styleUrl: './contacts-nav.component.css'
})
export class ContactsNavComponent extends ContactsComponent {
  onEntityClick() {
    sessionStorage.clear()
    sessionStorage.setItem(`entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`, JSON.stringify(this.selectedEntity))
    sessionStorage.setItem(`entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`, JSON.stringify(this.selectedEntityDefinition))
    this.router.navigate([EntityType.Contacts, this.selectedEntity?.id])
  }
}
