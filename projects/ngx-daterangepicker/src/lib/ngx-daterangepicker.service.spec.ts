import { TestBed } from '@angular/core/testing';

import { DaterangepickerConfig } from './ngx-daterangepicker.service';

describe('DaterangepickerService', () => {
  let service: DaterangepickerConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaterangepickerConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
