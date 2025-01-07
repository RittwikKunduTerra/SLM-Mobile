import { Component } from '@angular/core';
import {
  EntityActiveEquipmentsComponent,
  NoRecordsComponent,
  ModalComponent,
  EquipmentDetailsModalComponent,
} from 'slm-library';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-entity-active-equipments-wrapper',
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
  templateUrl: './entity-active-equipments-wrapper.component.html',
  styleUrl: './entity-active-equipments-wrapper.component.css',
})
export class EntityActiveEquipmentsWrapperComponent extends EntityActiveEquipmentsComponent {}
