import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEquipmentNavComponent } from './active-equipment-nav.component';

describe('ActiveEquipmentNavComponent', () => {
  let component: ActiveEquipmentNavComponent;
  let fixture: ComponentFixture<ActiveEquipmentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveEquipmentNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEquipmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
