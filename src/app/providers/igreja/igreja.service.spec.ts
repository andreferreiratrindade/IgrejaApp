import { TestBed } from '@angular/core/testing';

import { IgrejaService } from './igreja.service';

describe('IgrejaService', () => {
  let service: IgrejaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgrejaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
