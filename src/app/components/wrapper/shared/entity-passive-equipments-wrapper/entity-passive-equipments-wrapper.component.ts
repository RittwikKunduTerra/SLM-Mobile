import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { EntityPassiveEquipmentsComponent } from 'slm-library';
import {
  EquipmentDetailsModalComponent,
  ModalComponent,
  NoRecordsComponent,
} from 'slm-library';

@Component({
  selector: 'app-entity-passive-equipments-wrapper',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    MatIcon,
    NoRecordsComponent,
    ModalComponent,
    EquipmentDetailsModalComponent,
  ],
  providers: [DatePipe],
  templateUrl: './entity-passive-equipments-wrapper.component.html',
  styleUrl: './entity-passive-equipments-wrapper.component.css',
})
export class EntityPassiveEquipmentsWrapperComponent extends EntityPassiveEquipmentsComponent {}
