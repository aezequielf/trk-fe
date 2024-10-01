import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaDestinosComponent } from './agrega-destinos.component';

describe('AgregaDestinosComponent', () => {
  let component: AgregaDestinosComponent;
  let fixture: ComponentFixture<AgregaDestinosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregaDestinosComponent]
    });
    fixture = TestBed.createComponent(AgregaDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
