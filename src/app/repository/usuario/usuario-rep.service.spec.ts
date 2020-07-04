import { TestBed } from '@angular/core/testing';

import { UsuarioRepService } from './usuario-rep.service';

describe('UsuarioRepService', () => {
  let service: UsuarioRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
