import { Component } from '@angular/core';
import { EntityService, ModalService, PassiveEquipmentComponent } from 'slm-library';
import { MatCardModule } from '@angular/material/card';
import { TicketsService } from 'slm-library';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';

@Component({
  selector: 'app-passive-equipment-nav',
  standalone: true,
  imports: [EntityDataWrapperComponent,
    MatCardModule,
  ],
  providers: [EntityService, ModalService, TicketsService],
  templateUrl: './passive-equipment-nav.component.html',
  styleUrl: './passive-equipment-nav.component.css'
})
export class PassiveEquipmentNavComponent extends PassiveEquipmentComponent {

  onEntityClick() {
    sessionStorage.clear()
    sessionStorage.setItem(`entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`, JSON.stringify(this.selectedEntity))
    sessionStorage.setItem(`entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`, JSON.stringify(this.selectedEntityDefinition))
    this.router.navigate(['passiveequipment', this.selectedEntity?.id])
  }
}
