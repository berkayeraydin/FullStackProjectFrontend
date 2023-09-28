import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWorkshopComponent } from './signals-workshop.component';

describe('SignalsWorkshopComponent', () => {
  let component: SignalsWorkshopComponent;
  let fixture: ComponentFixture<SignalsWorkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsWorkshopComponent]
    });
    fixture = TestBed.createComponent(SignalsWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
