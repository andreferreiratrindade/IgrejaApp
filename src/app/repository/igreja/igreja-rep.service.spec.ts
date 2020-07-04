import { TestBed } from '@angular/core/testing';

import { IgrejaRepService } from './igreja-rep.service';

describe('IgrejaRepService', () => {
  let service: IgrejaRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgrejaRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
