import { TestBed } from '@angular/core/testing';

import { JsonOutputService } from './json-output.service';

describe('JsonOutputService', () => {
  let service: JsonOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
