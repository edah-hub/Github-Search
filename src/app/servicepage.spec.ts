import { TestBed } from '@angular/core/testing';

import { servicepage } from './servicepage';

describe('servicepage', () => {
  let service: servicepage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(servicepage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
