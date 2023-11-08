import { TestBed } from '@angular/core/testing';

import { ServicioAutorizarService } from './servicio-autorizar.service';

describe('ServicioAutorizarService', () => {
  let service: ServicioAutorizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutorizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
