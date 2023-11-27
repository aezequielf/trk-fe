import { TestBed } from '@angular/core/testing';

import { ServicioLoginNextService } from './servicio-login-next.service';

describe('ServicioLoginNextService', () => {
  let service: ServicioLoginNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLoginNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
