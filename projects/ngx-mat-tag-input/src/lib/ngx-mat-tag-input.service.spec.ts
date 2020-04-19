import {TestBed} from '@angular/core/testing';

import {NgxMatTagInputService} from './ngx-mat-tag-input.service';

describe('NgxMatTagInputService', () => {
  let service: NgxMatTagInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatTagInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
