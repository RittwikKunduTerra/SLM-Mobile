import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNavComponent } from './contacts-nav.component';

describe('ContactsNavComponent', () => {
  let component: ContactsNavComponent;
  let fixture: ComponentFixture<ContactsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
