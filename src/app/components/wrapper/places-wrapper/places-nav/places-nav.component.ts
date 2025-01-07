import { Component, HostListener, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BreadcrumbService, DataSharingService, DocumentsComponent, EntityActiveEquipmentsComponent, EntityAttributesComponent, EntityDetailsComponent, EntityPassiveEquipmentsComponent, EntitySitesComponent, EntityTicketsComponent, PlacesComponent, RouteValidator } from 'slm-library';
import { EntityService, ModalService } from 'slm-library';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { TicketsService } from 'slm-library';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-places-nav',
  standalone: true,
  imports: [
    EntityDataWrapperComponent,
    MatCardModule,
  ],
  providers: [EntityService],
  templateUrl: './places-nav.component.html',
  styleUrl: './places-nav.component.css'
})
export class PlacesNavComponent extends PlacesComponent {

  onEntityClick() {
    sessionStorage.clear()
    sessionStorage.setItem(`entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`, JSON.stringify(this.selectedEntity))
    sessionStorage.setItem(`entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`, JSON.stringify(this.selectedEntityDefinition))
    this.router.navigate(['places', this.selectedEntity?.id])
  }

}


