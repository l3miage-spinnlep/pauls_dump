import { TestBed } from '@angular/core/testing';

import { JsonInputService } from './json-input.service';

describe('JsonInputService', () => {
  let service: JsonInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
