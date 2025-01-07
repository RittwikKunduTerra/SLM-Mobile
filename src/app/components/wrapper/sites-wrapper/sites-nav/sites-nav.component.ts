import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SitesComponent } from 'slm-library';
import { EntityService, ModalService } from 'slm-library';
import { TicketsService } from 'slm-library';
import { EntityDataWrapperComponent } from '../../entity-data-wrapper/entity-data-wrapper.component';

@Component({
  selector: 'app-sites-nav',
  standalone: true,
  imports: [EntityDataWrapperComponent, MatCardModule, CommonModule],
  providers: [EntityService, ModalService, TicketsService],
  templateUrl: './sites-nav.component.html',
  styleUrl: './sites-nav.component.css',
})
export class SitesNavComponent extends SitesComponent {
  onEntityClick() {
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

    this.router.navigate(['sites', this.selectedEntity?.id]);
  }
}
