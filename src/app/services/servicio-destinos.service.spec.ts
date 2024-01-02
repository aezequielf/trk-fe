import { TestBed } from '@angular/core/testing';

import { ServicioDestinosService } from './servicio-destinos.service';

describe('ServicioDestinosService', () => {
  let service: ServicioDestinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDestinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
