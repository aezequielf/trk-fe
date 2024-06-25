import { TestBed } from '@angular/core/testing';

import { TravesiaServicioService } from './travesia-servicio.service';

describe('TravesiaServicioService', () => {
  let service: TravesiaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravesiaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
