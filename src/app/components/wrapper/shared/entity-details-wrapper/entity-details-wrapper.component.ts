import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent, EditAttributesComponent, EntityDataComponent, EntityDetailsComponent, EquipmentDetailsModalComponent, ModalComponent, NoRecordsComponent } from 'slm-library';
import { NgxCurrencyDirective } from 'ngx-currency';
import { MatGridListModule } from '@angular/material/grid-list';
import { EntityDataWrapperComponent } from "../../entity-data-wrapper/entity-data-wrapper.component";

@Component({
  selector: 'app-entity-details-wrapper',
  standalone: true,
  providers: [CurrencyPipe, DatePipe],
  imports: [MatDividerModule, ButtonComponent, MatGridListModule, CommonModule,
    ModalComponent, ReactiveFormsModule, EditAttributesComponent, EntityDataWrapperComponent,
    MatTabsModule, NgxCurrencyDirective, FormsModule, MatIconModule, NoRecordsComponent,
    EquipmentDetailsModalComponent, EntityDataWrapperComponent],
  templateUrl: './entity-details-wrapper.component.html',
  styleUrl: './entity-details-wrapper.component.css'
})
export class EntityDetailsWrapperComponent extends EntityDetailsComponent{

}
