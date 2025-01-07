import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import {
  AddEntityDataComponent,
  ButtonComponent,
  ConfigurationService,
  EntityDataComponent,
  EntityService,
  EntityType,
  LocationTypeEnums,
  LogoutService,
  ModalComponent,
  MY_DATE_FORMAT,
  NoRecordsComponent,
} from 'slm-library';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-entity-data-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    MatDivider,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ButtonComponent,
    AddEntityDataComponent,
    ModalComponent,
    EntityDataWrapperComponent,
    NoRecordsComponent,
    MatSliderModule,
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
    EntityService,
    ConfigurationService,
    LogoutService,
  ],
  templateUrl: './entity-data-wrapper.component.html',
  styleUrl: './entity-data-wrapper.component.css',
})
export class EntityDataWrapperComponent extends EntityDataComponent {
  @Output() onEntityClick = new EventEmitter();
  selectedRowIndex: number = -1;
  currentPage = 0;
  totalPages = 0;

  onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.currentPage = Number(target.value);
    this.targetPage = Number(target.value);
    this.navigateToPage();
  }

  override ngOnInit(): void {
    console.log(this.filteredEntityData, 'filteredEntityData');

    super.ngOnInit();

    this.refreshSubscription = this.dataSharingService.refresh$.subscribe(
      (data) => {},
    );
  }

  override onRowClick(index: any) {
    this.selectedRowIndex = index;
    this.selectRow(index);
    this.onEntityClick.emit();
  }

  override dataFetchComplete() {
    this.selectedRowIndex = -1;
    this.totalPages = !this.entityDataResponse?.next
      ? this.entityDataResponse?.pageNumber
      : this.getTotalPageCount();
  }

  override nextList() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      super.nextList();
    }
  }

  override previousList(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      super.previousList();
    }
  }

  override openEntityDataPickerForAdd(pickerType: any) {
    if (pickerType === EntityType.Places) {
      this.selectAEntityRef = this.modelService.openModal(
        this.selectPlaceTemplate!,
        'md',
      );
    } else if (pickerType === EntityType.Tenants) {
      this.selectAEntityRef = this.modelService.openModal(
        this.selectTenantTemplate!,
        'md',
      );
    } else if (pickerType === EntityType.ActiveEquipments) {
      this.storageService?.clearAllRecords();
      this.selectAEntityRef = this.modelService.openModal(
        this.selectActiveEquipmentTemplate!,
        'md',
      );
    } else if (pickerType === EntityType.PassiveEquipments) {
      this.storageService?.clearAllRecords();
      this.selectAEntityRef = this.modelService.openModal(
        this.selectPassiveEquipmentTemplate!,
        'md',
      );
    } else if (pickerType === EntityType.Sites) {
      this.selectAEntityRef = this.modelService.openModal(
        this.selectSiteTemplate!,
        'md',
      );
    } else if (pickerType === EntityType.Contacts) {
      this.selectAEntityRef = this.modelService.openModal(
        this.selectContactTemplate!,
        'md',
      );
    } else if (pickerType === LocationTypeEnums) {
      this.entityDataPickerDataService.setData(undefined);
      if (this.selectLocationTemplate != undefined) {
        this.selectLocationRef = this.modelService.openModal(
          this.selectLocationTemplate,
          'md',
        );
      }
    }
  }
}
