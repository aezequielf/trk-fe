import { TestBed } from '@angular/core/testing';

import { PciaServicioService } from './pcia-servicio.service';

describe('PciaServicioService', () => {
  let service: PciaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PciaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
