import { TestBed } from '@angular/core/testing';

import { SnackBarErrorHandlerService } from './snack-bar-error-handler.service';

describe('SnackBarErrorHandlerService', () => {
  let service: SnackBarErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
