import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEquipmentDetailsComponent } from './active-equipment-details.component';

describe('ActiveEquipmentDetailsComponent', () => {
  let component: ActiveEquipmentDetailsComponent;
  let fixture: ComponentFixture<ActiveEquipmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveEquipmentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
