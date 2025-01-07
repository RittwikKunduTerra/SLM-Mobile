import { Component } from '@angular/core';
import { ActiveEquipmentComponent, EntityService } from 'slm-library';
import { MatCardModule } from '@angular/material/card';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';

@Component({
  selector: 'app-active-equipment-nav',
  standalone: true,
  imports: [EntityDataWrapperComponent,
    MatCardModule],
  providers: [EntityService],
  templateUrl: './active-equipment-nav.component.html',
  styleUrl: './active-equipment-nav.component.css'
})
export class ActiveEquipmentNavComponent extends ActiveEquipmentComponent {
  onEntityClick() {
    sessionStorage.clear()
    sessionStorage.setItem(`entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`, JSON.stringify(this.selectedEntity))
    sessionStorage.setItem(`entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`, JSON.stringify(this.selectedEntityDefinition))
    this.router.navigate(['activeequipment', this.selectedEntity?.id])
  }
}
