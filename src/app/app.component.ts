import { CommonModule } from '@angular/common';
import {} from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../environments/environment';
import { Environment } from '../environments/enums/environment.enum';
import {
  BreadcrumbComponent,
  EntityType,
  LogoutService,
  ModalService,
} from 'slm-library';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from 'slm-library';
import { MatCommonModule } from '@angular/material/core';
import { SidenavWrapperComponent } from './components/wrapper/sidenav-wrapper/sidenav-wrapper.component';
import { ENVIRONMENT_TOKEN } from 'slm-library';
import { NavigationService } from './components/services/navigation.service';
import { AuthService } from './components/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCommonModule,
    MatTableModule,
    CommonModule,
    MatMenuModule,
    BreadcrumbComponent,
    SidenavWrapperComponent,
  ],
  providers: [
    BrowserModule,
    CookieService,
    BsModalService,
    NavigationService,
    ModalService,
    AuthService,
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
  ],
})
export class AppComponent {
  constructor(
    private cookieService: CookieService,
    private logoutService: LogoutService,
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private breadcrumbService: BreadcrumbService,
  ) {}
  tokenresp!: any;
  collapsed = signal(true);
  breadcrumbs: any[] = [];
  @ViewChild('target', { static: false }) targetElement?: ElementRef;
  resizeObserver!: ResizeObserver;
  sidenavWidth = computed(() => (this.collapsed() ? '0px' : '250px'));
  routerSubscription?: Subscription;
  isWorkflowtemplate: boolean = true;
  showBackButton = false;

  toggleSidenav(event: MouseEvent) {
    this.collapsed.set(!this.collapsed());
  }
  ngOnInit() {
    if (environment.buildType !== Environment.Development) {
      if (this.authService.isAuthorised()) {
        this.decodetoken();
      } else {
        this.router.navigate(['login']);
      }
    }
  }

  onMenuItemFocus(event: Event): void {
    const element = event.target as HTMLElement;
    element.classList.add('selected-menu-item');
  }

  ngAfterViewInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (
          this.router.url.split('?')[0].includes('/workflow-render-entity-row')
        ) {
          this.isWorkflowtemplate = true;
          this.setBodyAndHtmlHeight();
        } else {
          this.isWorkflowtemplate = false;
          if (
            [
              `/${EntityType.Places}`,
              `/${EntityType.Sites}`,
              `/${EntityType.ActiveEquipments}`,
              `/${EntityType.PassiveEquipments}`,
              `/${EntityType.Contacts}`,
              `/${EntityType.Tenants}`,
              `/${'mysites'}`,
            ].includes(this.router.url)
          ) {
            this.showBackButton = false;
          } else {
            this.showBackButton = true;
          }
        }
      }
    });

    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: any[]) => {
      this.breadcrumbs = breadcrumbs;
      this.breadcrumbResizeObserver();
    });
  }

  breadcrumbResizeObserver() {
    try {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const newHeight = entry.contentRect.height;
          const modalElement = document.querySelector('.container');
          if (modalElement) {
            if (newHeight > 0) {
              modalElement.setAttribute(
                'style',
                `padding-bottom: ${newHeight + 15}px;`,
              );
            } else {
              modalElement.setAttribute('style', `padding-bottom: 15px;`);
            }
            this.cdr.detectChanges();
          }
        }
      });
      this.resizeObserver.observe(this.targetElement?.nativeElement);
    } catch (error) {}
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  logOut() {
    this.logoutService.logout().subscribe((resp: any) => {
      this.cookieService.deleteAll();
      this.router.navigate(['login']);
    });
  }
  decodetoken() {
    this.logoutService.decodeToken().subscribe((resp: any) => {
      this.tokenresp = resp;
    });
  }

  isWorkflowTemplateRoute(): boolean {
    return this.router.url.includes('/workflow-render-entity-row');
  }

  setBodyAndHtmlHeight() {
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
  }

  backClicked(event: Event) {
    history.back();
  }
}
