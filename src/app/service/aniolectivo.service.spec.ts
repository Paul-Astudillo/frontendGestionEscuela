import { TestBed } from '@angular/core/testing';

import { AniolectivoService } from './aniolectivo.service';

describe('AniolectivoService', () => {
  let service: AniolectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniolectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
