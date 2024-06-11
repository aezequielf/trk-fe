import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosGuiaComponent } from './servicios-guia.component';

describe('ServiciosGuiaComponent', () => {
  let component: ServiciosGuiaComponent;
  let fixture: ComponentFixture<ServiciosGuiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosGuiaComponent]
    });
    fixture = TestBed.createComponent(ServiciosGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
