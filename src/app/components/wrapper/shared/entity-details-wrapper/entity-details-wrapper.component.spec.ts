import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsWrapperComponent } from './entity-details-wrapper.component';

describe('EntityDetailsWrapperComponent', () => {
  let component: EntityDetailsWrapperComponent;
  let fixture: ComponentFixture<EntityDetailsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityDetailsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
