import { TestBed } from '@angular/core/testing';

import { KnightsService } from './knights.service';

describe('KnightsService', () => {
  let service: KnightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
