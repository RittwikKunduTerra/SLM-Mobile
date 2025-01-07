import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SitesComponent } from 'slm-library';
import { EntityService, ModalService } from 'slm-library';
import { TicketsService } from 'slm-library';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-my-sites-nav',
  standalone: true,
  imports: [
    EntityDataWrapperComponent,
    MatCardModule,
    CommonModule,
    MatTabsModule,
    MatDividerModule,
  ],
  providers: [EntityService, ModalService, TicketsService],
  templateUrl: './my-sites-nav.component.html',
  styleUrl: './my-sites-nav.component.css',
})
export class MySitesNavComponent extends SitesComponent {
  override latitudeLongitude: any;
  override ngOnInit(): void {
    this.getCurrentLocation();
  }
  onEntityClick(param: string) {
    console.log(param, 'param');

    sessionStorage.clear();

    sessionStorage.setItem(
      `entityData_${this.activatedRoute.snapshot.routeConfig?.path}/${this.selectedEntity?.id}`,
      JSON.stringify(this.selectedEntity),
    );
    sessionStorage.setItem(
      `entityDef_${this.activatedRoute.snapshot.routeConfig?.path}`,
      JSON.stringify(this.selectedEntityDefinition),
    );

    console.log(
      this.activatedRoute.snapshot.routeConfig,
      '1',
      this.activatedRoute.snapshot.routeConfig?.path,
      '2',
      this.selectedEntity,
      'test',
    );
    if (param == 'my_sites') {
      console.log(param, this.selectedEntity, 'test');

      this.router.navigate(['my_sites', this.selectedEntity?.id]);
    } else {
      this.router.navigate(['nearBy_sites', this.selectedEntity?.id]);
    }
    console.log(this.latitudeLongitude, 'mysits');
  }

  sitesTabIndex: number = 0;

  onTabChangeSites(event: MatTabChangeEvent): void {
    this.sitesTabIndex = event.index;
    console.log('Selected Tab Index:', this.sitesTabIndex);
  }
  override getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          if (position) {
            this.latitudeLongitude = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
          }
        },
        (error) => console.log(error),
      );
    }
  }
}
