import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEquipmentChildrenWrapperComponent } from './entity-equipment-children-wrapper.component';

describe('EntityEquipmentChildrenWrapperComponent', () => {
  let component: EntityEquipmentChildrenWrapperComponent;
  let fixture: ComponentFixture<EntityEquipmentChildrenWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityEquipmentChildrenWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityEquipmentChildrenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
