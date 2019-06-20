import { TestBed } from '@angular/core/testing';

import { BadWordService } from './bad-word.service';

describe('BadWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadWordService = TestBed.get(BadWordService);
    expect(service).toBeTruthy();
  });
});
