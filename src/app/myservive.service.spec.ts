import { TestBed } from '@angular/core/testing';

import { MyserviveService } from './myservive.service';

describe('MyserviveService', () => {
  let service: MyserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
