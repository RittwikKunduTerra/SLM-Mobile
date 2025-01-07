import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesNavComponent } from './places-nav.component';

describe('PlacesNavComponent', () => {
  let component: PlacesNavComponent;
  let fixture: ComponentFixture<PlacesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
