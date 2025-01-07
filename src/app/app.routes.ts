import { Routes } from '@angular/router';
import { LoginComponent } from './components/logIn';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';
import { Environment } from '../environments/enums/environment.enum';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'places',
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },

  {
    path: 'my_sites',
    loadComponent: () =>
      import(
        './components/wrapper/dashboard-wrapper/my-sites-nav/my-sites-nav.component'
      ).then((m) => m.MySitesNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'my_sites/:id',
    loadComponent: () =>
      import(
        './components/wrapper/dashboard-wrapper/my-sites-details/my-sites-details.component'
      ).then((m) => m.MySitesDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'nearBy_sites/:id',
    loadComponent: () =>
      import(
        './components/wrapper/dashboard-wrapper/near-by-sites-details/near-by-sites-details.component'
      ).then((m) => m.NearBySitesDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'places',
    loadComponent: () =>
      import(
        './components/wrapper/places-wrapper/places-nav/places-nav.component'
      ).then((m) => m.PlacesNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'places/:id',
    loadComponent: () =>
      import(
        './components/wrapper/places-wrapper/places-details/places-details.component'
      ).then((m) => m.PlacesDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'sites',
    loadComponent: () =>
      import(
        './components/wrapper/sites-wrapper/sites-nav/sites-nav.component'
      ).then((m) => m.SitesNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'sites/:id',
    loadComponent: () =>
      import(
        './components/wrapper/sites-wrapper/sites-details/sites-details.component'
      ).then((m) => m.SitesDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'activeequipment',
    loadComponent: () =>
      import(
        './components/wrapper/active-equipment-wrapper/active-equipment-nav/active-equipment-nav.component'
      ).then((m) => m.ActiveEquipmentNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'activeequipment/:id',
    loadComponent: () =>
      import(
        './components/wrapper/active-equipment-wrapper/active-equipment-details/active-equipment-details.component'
      ).then((m) => m.ActiveEquipmentDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'passiveequipment',
    loadComponent: () =>
      import(
        './components/wrapper/passive-equipment-wrapper/passive-equipment-nav/passive-equipment-nav.component'
      ).then((m) => m.PassiveEquipmentNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'passiveequipment/:id',
    loadComponent: () =>
      import(
        './components/wrapper/passive-equipment-wrapper/passive-equipment-details/passive-equipment-details.component'
      ).then((m) => m.PassiveEquipmentDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import(
        './components/wrapper/contacts-wrapper/contacts-nav/contacts-nav.component'
      ).then((m) => m.ContactsNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'contacts/:id',
    loadComponent: () =>
      import(
        './components/wrapper/contacts-wrapper/contact-details/contact-details.component'
      ).then((m) => m.ContactDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'tenants',
    loadComponent: () =>
      import(
        './components/wrapper/tenants-wrapper/tenants-nav/tenants-nav.component'
      ).then((m) => m.TenantsNavComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'tenants/:id',
    loadComponent: () =>
      import(
        './components/wrapper/tenants-wrapper/tenants-details/tenants-details.component'
      ).then((m) => m.TenantsDetailsComponent),
    canActivate:
      environment.buildType !== Environment.Development ? [AuthGuard] : [],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
