import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaPerfilComponent } from './guia.perfil.component';

describe('GuiaComponent', () => {
  let component: GuiaPerfilComponent;
  let fixture: ComponentFixture<GuiaPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiaPerfilComponent]
    });
    fixture = TestBed.createComponent(GuiaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
