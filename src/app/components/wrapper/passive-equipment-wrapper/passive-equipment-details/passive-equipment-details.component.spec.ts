import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveEquipmentDetailsComponent } from './passive-equipment-details.component';

describe('ActiveEquipmentDetailsComponent', () => {
  let component: PassiveEquipmentDetailsComponent;
  let fixture: ComponentFixture<PassiveEquipmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassiveEquipmentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassiveEquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
