import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearBySitesDetailsComponent } from './near-by-sites-details.component';

describe('NearBySitesDetailsComponent', () => {
  let component: NearBySitesDetailsComponent;
  let fixture: ComponentFixture<NearBySitesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearBySitesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearBySitesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
