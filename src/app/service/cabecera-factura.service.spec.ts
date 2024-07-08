import { TestBed } from '@angular/core/testing';

import { CabeceraFacturaService } from './cabecera-factura.service';

describe('CabeceraFacturaService', () => {
  let service: CabeceraFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabeceraFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
