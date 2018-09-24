import { TestBed } from '@angular/core/testing';

import { InloggenService } from './inloggen.service';

describe('InloggenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InloggenService = TestBed.get(InloggenService);
    expect(service).toBeTruthy();
  });
});
