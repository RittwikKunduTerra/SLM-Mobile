import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySitesDetailsComponent } from './my-sites-details.component';

describe('MySitesDetailsComponent', () => {
  let component: MySitesDetailsComponent;
  let fixture: ComponentFixture<MySitesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySitesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySitesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
