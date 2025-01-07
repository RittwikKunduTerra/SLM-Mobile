import { Component, HostListener, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EntityType, TenantsComponent } from 'slm-library';
import { EntityService } from 'slm-library';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';

@Component({
  selector: 'app-tenants-nav',
  standalone: true,
  imports: [
    EntityDataWrapperComponent,
    MatCardModule
  ],
  providers: [EntityService],
  templateUrl: './tenants-nav.component.html',
  styleUrl: './tenants-nav.component.css'
})
export class TenantsNavComponent extends TenantsComponent {

  onEntityClick() {
    sessionStorage.clear()
    sessionStorage.setItem(`entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`, JSON.stringify(this.selectedEntity))
    sessionStorage.setItem(`entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`, JSON.stringify(this.selectedEntityDefinition))
    this.router.navigate([EntityType.Tenants, this.selectedEntity?.id])
  }
}
