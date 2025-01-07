import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsNavComponent } from './tenants-nav.component';

describe('TenantsNavComponent', () => {
  let component: TenantsNavComponent;
  let fixture: ComponentFixture<TenantsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
