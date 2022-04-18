import { TestBed } from '@angular/core/testing';

import { serviceserviceComponent } from './service.service';

describe('ServiceService', () => {
  let service: serviceserviceComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceserviceComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
