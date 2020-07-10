import { TestBed } from '@angular/core/testing';

import { DominioServicoRepositoryService } from './dominio-servico-repository.service';

describe('DominioServicoRepositoryService', () => {
  let service: DominioServicoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DominioServicoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
