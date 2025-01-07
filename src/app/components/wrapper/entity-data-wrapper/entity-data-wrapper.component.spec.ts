import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDataWrapperComponent } from './entity-data-wrapper.component';

describe('EntityDataWrapperComponent', () => {
  let component: EntityDataWrapperComponent;
  let fixture: ComponentFixture<EntityDataWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityDataWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityDataWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
