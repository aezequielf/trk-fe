import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarguiaComponent } from './validarguia.component';

describe('ValidarguiaComponent', () => {
  let component: ValidarguiaComponent;
  let fixture: ComponentFixture<ValidarguiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarguiaComponent]
    });
    fixture = TestBed.createComponent(ValidarguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
