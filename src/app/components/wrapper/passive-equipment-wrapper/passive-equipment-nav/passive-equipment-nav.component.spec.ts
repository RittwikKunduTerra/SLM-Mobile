import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveEquipmentNavComponent } from './passive-equipment-nav.component';

describe('ActiveEquipmentWrapperComponent', () => {
  let component: PassiveEquipmentNavComponent;
  let fixture: ComponentFixture<PassiveEquipmentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassiveEquipmentNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassiveEquipmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
