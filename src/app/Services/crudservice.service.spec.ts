import { TestBed } from '@angular/core/testing';

import { CRUDserviceService } from './crudservice.service';

describe('CRUDserviceService', () => {
  let service: CRUDserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
