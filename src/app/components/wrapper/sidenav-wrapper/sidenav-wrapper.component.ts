import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CustomSidenavComponent, LogoutService, MenuItem } from 'slm-library';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import sideNavJson from '../../../../../config-jsons/sidenav-menu.json'

@Component({
  selector: 'app-sidenav-wrapper',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MatExpansionModule],
  providers: [LogoutService],
  templateUrl: './sidenav-wrapper.component.html',
  styleUrl: './sidenav-wrapper.component.css'
})
export class SidenavWrapperComponent extends CustomSidenavComponent {
  @Output() closeSideNav = new EventEmitter<any>();

  override menuItemClicked() {
    this.breadcrumbService.clearBreadcrumb()
    this.closeSideNav.emit()
  }
  ngOnInit() {
    this.menuItems = signal<MenuItem[]>(sideNavJson);
  }

  logOut() {
    this.logoutService.logout().subscribe((resp: any) => {
      this.cookieService.deleteAll();
      this.router.navigate(['login']);
    });
  }
}
