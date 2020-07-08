import { TestBed } from '@angular/core/testing';

import { PrestadorRepServiceService } from './prestador-rep-service.service';

describe('PrestadorRepServiceService', () => {
  let service: PrestadorRepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadorRepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
