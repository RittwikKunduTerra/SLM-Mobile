import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EntityEquipmentChildrenComponent, EquipmentDetailsModalComponent, ModalComponent, NoRecordsComponent } from 'slm-library';

@Component({
  selector: 'app-entity-equipment-children-wrapper',
  standalone: true,
  imports: [CommonModule, MatIcon, NoRecordsComponent, ModalComponent, EquipmentDetailsModalComponent],
  providers: [DatePipe],
  templateUrl: './entity-equipment-children-wrapper.component.html',
  styleUrl: './entity-equipment-children-wrapper.component.css'
})
export class EntityEquipmentChildrenWrapperComponent extends EntityEquipmentChildrenComponent{

}
