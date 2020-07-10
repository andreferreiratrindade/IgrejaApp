import { TestBed } from '@angular/core/testing';

import { DominioServicoService } from './dominio-servico.service';

describe('DominioServicoService', () => {
  let service: DominioServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DominioServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
