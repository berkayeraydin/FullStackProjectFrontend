import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsFormComponent } from './signals-form.component';

describe('SignalsFormComponent', () => {
  let component: SignalsFormComponent;
  let fixture: ComponentFixture<SignalsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsFormComponent]
    });
    fixture = TestBed.createComponent(SignalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
