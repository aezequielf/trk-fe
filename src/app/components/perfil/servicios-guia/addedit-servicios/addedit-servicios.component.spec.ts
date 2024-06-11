import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditServiciosComponent } from './addedit-servicios.component';

describe('AddeditServiciosComponent', () => {
  let component: AddeditServiciosComponent;
  let fixture: ComponentFixture<AddeditServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditServiciosComponent]
    });
    fixture = TestBed.createComponent(AddeditServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
