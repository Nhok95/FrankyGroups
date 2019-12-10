import { TestBed } from '@angular/core/testing';

import { CreategroupsService } from './creategroups.service';

describe('CreategroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreategroupsService = TestBed.get(CreategroupsService);
    expect(service).toBeTruthy();
  });
});
