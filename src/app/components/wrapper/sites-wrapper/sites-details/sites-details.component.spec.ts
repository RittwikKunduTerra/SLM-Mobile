import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesDetailsComponent } from './sites-details.component';

describe('SitesDetailsComponent', () => {
  let component: SitesDetailsComponent;
  let fixture: ComponentFixture<SitesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
