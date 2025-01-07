import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySitesNavComponent } from './my-sites-nav.component';

describe('MySitesNavComponent', () => {
  let component: MySitesNavComponent;
  let fixture: ComponentFixture<MySitesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySitesNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySitesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
