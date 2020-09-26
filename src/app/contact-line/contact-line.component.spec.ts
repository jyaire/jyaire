import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLineComponent } from './contact-line.component';

describe('ContactLineComponent', () => {
  let component: ContactLineComponent;
  let fixture: ComponentFixture<ContactLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
