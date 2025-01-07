import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityActiveEquipmentsWrapperComponent } from './entity-active-equipments-wrapper.component';

describe('EntityActiveEquipmentsWrapperComponent', () => {
  let component: EntityActiveEquipmentsWrapperComponent;
  let fixture: ComponentFixture<EntityActiveEquipmentsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityActiveEquipmentsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityActiveEquipmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
