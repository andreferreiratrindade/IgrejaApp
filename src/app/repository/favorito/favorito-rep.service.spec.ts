import { TestBed } from '@angular/core/testing';

import { FavoritoRepService } from './favorito-rep.service';

describe('FavoritoRepService', () => {
  let service: FavoritoRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
