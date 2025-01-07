import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityPassiveEquipmentsWrapperComponent } from './entity-passive-equipments-wrapper.component';

describe('EntityPassiveEquipmentsWrapperComponent', () => {
  let component: EntityPassiveEquipmentsWrapperComponent;
  let fixture: ComponentFixture<EntityPassiveEquipmentsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityPassiveEquipmentsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityPassiveEquipmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
